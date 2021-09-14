import React,{ Component } from "react";
import moment from "moment";
import Cards from './Components/cards';
import Header from './Components/header';
import NotFoundPage from './Components/notFoundPage';
import LoadingPage from './Components/loadingPage';
import Footer from './Components/footer'
import './main.css';
import { Route, Switch, Redirect } from 'react-router-dom'

function getWeatherApi(city){
    return `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=3518ad82ca06ca13a7b7b9a218d61c51`;
}
class App extends Component{
    state ={
        data:[],
        city:''
    }
    componentDidMount(){
        let data = [];
        let i = 0;
        fetch('https://extreme-ip-lookup.com/json')
        .then(response => response.json())
        .then(response => {
            this.setState({city:response.city});})
        .then(()=>{
            const endPointApi = getWeatherApi(this.state.city)
            fetch(endPointApi).then(response => response.json()).then(response => {
                for(i=0;i<5;i++){
                    let day = response.list[i];
                    data.push(day);
                }
                this.setState({data});
            });
        })
    }
    getNextDays(){
        const nextDays = [
            moment(),
            moment().add(1,'d'),
            moment().add(2,'d'),
            moment().add(3,'d'),
            moment().add(4,'d')
        ]
        return nextDays;
    }
    render(){
        const nextDays = this.getNextDays();
        if(this.state.data.length===0){
            return(
                <div>
                    <Header/>
                    <LoadingPage/>
                </div>
            );
        }
        return(
            <div className="container">
                <Header city={this.state.city}/>
                <Switch>
                    <Route path="/weatherapp" exact component={(props)=> <Cards {...props} data = {this.state.data}
                            nextDays = {nextDays} /> }/>
                    <Route path="/weatherapp/day:id" render={ (props)=> {return this.state.data.length !== 0 &&
                                    <Cards {...props} data = {this.state.data}
                                    nextDays = {nextDays} /> }}/>
                    <Route path="/weatherapp/not-found" component={ NotFoundPage } />
                    <Route path="/weatherapp/loading" component={ LoadingPage } />
                    <Redirect from="/" exact to="/weatherapp"/>
                    <Redirect to="/weatherapp/not-found" />                  
                </Switch>
                <Footer/>
            </div>
        );
    }
}
export default App;

