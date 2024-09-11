import { useState } from "react"
import { useContext } from "react";
import { WeatherContext } from './WeatherContext.jsx';

export default function HumidityInfo(){
    const { weatherData } = useContext(WeatherContext);

    return(
        <>
            {weatherData ? (
                <div className='humidityInfo'>
                    <p className='humidityInfo-title'>Humidity</p>
                    <span className='humidityInfo-text'><i className='humidityInfo-icon fa-solid fa-droplet'/>{weatherData.main.humidity}%</span>
                </div>
            ) : (
                <p>Nenhum dado disponível</p>
            )}
        </>
    )
}