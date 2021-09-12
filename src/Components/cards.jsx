import React,{ Component } from "react";
import WeatherCard from "./weatherCard";
import moment from "moment";

const endPoint = 'https://api.openweathermap.org/data/2.5/forecast?q=marrakech&appid=3518ad82ca06ca13a7b7b9a218d61c51'
const allweekDay=['dimanch','lundi','mardi','mercredi','jeudi','vendredi','samedi'];
const allMonth=['jan','fev','mars','apr','may','juin','juillet','aout','sept','oct','nov','dec']
class Cards extends Component{
    state = {
        cards:[]
    }

    componentDidMount(){
        var cards = [];
        var i=0;
        fetch(endPoint).then(result => result.json()).then(result=> {
            for(i=0;i<5;i++){
                const { weather, main }=result.list[i]
                cards.push({weather,main})
            } 
            this.setState({cards:cards});
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

        const NextDaysWeek = [
            allweekDay[nextDays[0].day()],
            allweekDay[nextDays[1].day()],
            allweekDay[nextDays[2].day()],
            allweekDay[nextDays[3].day()],
            allweekDay[nextDays[4].day()]
        ]
        return [NextDaysWeek,nextDays];

    }
    render(){
        const nextDaysWeek = this.getNextDays()[0];
        const nextDay = this.getNextDays()[1];
        return(
            <div className="cardsHolder">
                {
                    this.state.cards.map((card,i) => <WeatherCard key={i} 
                                                        weekDay={nextDaysWeek[i]}
                                                        month={allMonth[nextDay[i].get('month')]}
                                                        day={nextDay[i].get('date')}
                                                        degree={card.main.temp}  
                                                        description={card.weather[0].description}
                                                        icon={card.weather[0].icon} />)
                }
            </div>
        );
    }

}

export default Cards;