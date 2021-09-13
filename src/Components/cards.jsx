import React from "react";
import WeatherCard from "./weatherCard";
import { Redirect } from "react-router";

const Cards =(props) =>{
        const {data, nextDays,match} = props;
        if (match.params.id) {
            if(match.params.id<5){
                return <WeatherCard index={match.params.id}
                         weatherInfo={data[match.params.id]}
                         date = {nextDays[match.params.id]} 
                         addClass="fullCard"/>
            }
            else{
                return <Redirect to="not-found" />
            }
        }else{
            return(
                <div className="cardsHolder">
                    {
                        data.map((card,i) => <WeatherCard key={i} 
                                                            index={i}
                                                            weatherInfo={data[i]}
                                                            date = {nextDays[i]}
                                            />
                                )
                    }
                </div>

            );
        }
}

export default Cards;