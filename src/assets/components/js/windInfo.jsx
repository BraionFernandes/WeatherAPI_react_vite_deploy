import { useState } from "react"
import { useContext } from "react";
import { WeatherContext } from './WeatherContext.jsx';

export default function WindInfo(){
    const { weatherData } = useContext(WeatherContext);

    return(
        <>
            {weatherData ? (
                <div className='windInfo'>
                    <p className='windInfo-title'>Wind</p>
                    <span className='windInfo-text'><i className='windInfo-icon fa-solid fa-wind'></i>{weatherData.wind.speed}km/h</span>
                </div>
            ) : (
                <p>Nenhum dado disponível</p>
            )}
        </>
    )
}