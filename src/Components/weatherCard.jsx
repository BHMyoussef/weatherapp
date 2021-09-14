import React from 'react'
import { Link } from 'react-router-dom';

const allweekDay=['dimanch','lundi','mardi','mercredi','jeudi','vendredi','samedi'];
const allMonth=['jan','fev','mars','apr','may','juin','juillet','aout','sept','oct','nov','dec']

const WeatherCard = ({weatherInfo, date, index,addClass}) =>{
    console.log(addClass);
    return(
        <Link to={`weatherapp/day${index}`}>
            <div className={addClass?"card fullCard":"card"}>
                <div className="head">
                    <h3>{allweekDay[date.day()]}</h3>
                    <p className="date">{`${allMonth[date.month()]} ${date.date()}`}</p>
                </div>
                <div className="infos">
                    {
                        addClass && 
                        <div className="infos1">
                            <div>
                                <i className="icon"></i>
                                <p>Max temprature: <span>{weatherInfo.main.temp_max}</span>°K</p>
                            </div>
                            <div>
                                <i className="icon"></i>
                                <p>Min temprature: <span>{weatherInfo.main.temp_min}</span>°k</p>
                            </div>
                            <div>
                                <i className="icon"></i>
                                <p>Humidity: <span>{weatherInfo.main.humidity}</span></p>
                            </div>
                            <div>
                                <i className="icon"></i>
                                <p>Pressure: <span>{weatherInfo.main.pressure}</span>Bar</p>
                            </div>
                            <div>
                                <i className="icon"></i>
                                <p> 
                                    deg: <span>{weatherInfo.wind.deg}</span><br />
                                    Speed: <span>{weatherInfo.wind.speed}</span>
                                </p>
                            </div>
                        </div>
                    }
                    <div className="infos2">
                        <div className="icon"><img src={`https://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@2x.png`} alt="" /></div>
                        <p className="degree">{weatherInfo.main.temp}</p>
                        <p>{weatherInfo.weather[0].description}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
}
export default WeatherCard;