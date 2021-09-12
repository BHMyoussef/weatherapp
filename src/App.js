import React,{ Component } from "react";
import Cards from './Components/cards';
import Header from './Components/header';
import './main.css';

class App extends Component{
    render(){
        return(
            <div className="container">
                <Header/>
                <Cards />
            </div>
        );
    }
}
export default App;

