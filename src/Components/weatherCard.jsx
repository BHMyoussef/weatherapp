import React from 'react'
import { Link } from 'react-router-dom';

const allweekDay=['dimanch','lundi','mardi','mercredi','jeudi','vendredi','samedi'];
const allMonth=['jan','fev','mars','apr','may','juin','juillet','aout','sept','oct','nov','dec']

const WeatherCard = ({weatherInfo, date, handleChange, index}) =>{
    return(
        <Link to={`day${index}`}>
            <div className="card">
                <h3>{allweekDay[date.day()]}</h3>
                <p className="date">{`${allMonth[date.month()]} ${date.date()}`}</p>
                <div className="icon"><img src={`https://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@2x.png`} alt="" /></div>
                <p className="degree">{weatherInfo.main.temp}</p>
                <p>{weatherInfo.weather[0].description}</p>
            </div>
        </Link>
    );
}
export default WeatherCard;