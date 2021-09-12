import React from 'react'

const WeatherCard = ({weekDay, month, day, degree, description, icon}) =>{
    return(
        <div className="card">
            <h3>{weekDay}</h3>
            <p className="date">{`${month} ${day}`}</p>
            <div className="icon"><img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="" /></div>
            <p className="degree">{degree}</p>
            <p>{description}</p>
        </div>
    );
}
export default WeatherCard;