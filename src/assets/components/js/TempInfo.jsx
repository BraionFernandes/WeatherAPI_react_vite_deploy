import { useState } from "react"
import { useContext } from "react";
import { WeatherContext } from './WeatherContext.jsx';

export default function TempInfo(){
    const { weatherData } = useContext(WeatherContext);

    return(
        <>
            {weatherData ? (
                <div className='info-temp'>
                    <span className='info-temp-text'>{weatherData.main.temp.toFixed()}°</span>
                </div>
            ) : (
                <p>Nenhum dado disponível</p>
            )}
        </>
    )
}