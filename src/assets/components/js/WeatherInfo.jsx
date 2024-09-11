import { useState } from "react"
import { useContext } from "react";
import { WeatherContext } from './WeatherContext.jsx';

export default function WeatherInfo(){
    const { weatherData } = useContext(WeatherContext);

    return(
        <>
            {weatherData ? (
                <div className='weatherInfo'>
                    <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="" className='weatherInfo-image'/>
                    <span className='weatherInfo-text'>{weatherData.weather[0].description}</span>
                </div>
            ) : (
                <p>Nenhum dado disponível</p>
            )}
        </>
    )
}