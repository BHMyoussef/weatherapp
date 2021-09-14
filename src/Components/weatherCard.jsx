import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const allweekDay=['dimanch','lundi','mardi','mercredi','jeudi','vendredi','samedi'];
const allMonth=['jan','fev','mars','apr','may','juin','juillet','aout','sept','oct','nov','dec']

const divVariants={
    hidden:{
        opacity:0
    },
    visible:{
        opacity:1,
        transition:{
            delay:1
        }
    },
    hover:{
        scale:1.2,
        boxShadow:'2px 2px 8px #000'
    },
    click:{
        scale:1.1,
        boxShadow:'2px 2px 4px #000'
    }
}
const afterClass = {
    variants: divVariants,
    initial:"hidden",
    animate:"visible",
}
const beforeClass = {
    variants: divVariants,
    initial:"hidden",
    animate:"visible",
    whileHover:"hover",
    whileTap:"click"
}

const WeatherCard = ({weatherInfo, date, index,addClass, back}) =>{
    console.log(index);
    return(
        <Link to={`/weatherapp/day${index}`}>
            <motion.div 
                className={addClass?"card fullCard":"card"}
                { ...(addClass?afterClass:beforeClass)}
                >
                <div className="head">
                    <h3>{allweekDay[date.day()]}</h3>
                    <p className="date">{`${allMonth[date.month()]} ${date.date()}`}</p>
                </div>
                <div className="infos">
                    {
                        addClass && 
                        <div className="infos1">
                            <motion.button onClick={()=>back()}
                                whileHover={{scale:1.2}}
                                whileTap={{scale:1}}></motion.button>
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
            </motion.div>
        </Link>
    );
}
export default WeatherCard;