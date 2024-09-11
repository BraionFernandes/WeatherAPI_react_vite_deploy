import { useState } from "react"
import { useContext } from "react";
import { WeatherContext } from './WeatherContext.jsx';

export default function CityName(){
    const { weatherData } = useContext(WeatherContext);

    return(
        <>
            {weatherData ? (
                <div className='info-citySearch'>
                    <p className='info-cityName'>{weatherData.name}</p>
                    <img src={`https://flagsapi.com/${weatherData.sys.country}/flat/64.png`} alt="" className='info-cityFlag'/>
                </div>
            ) : (
                <p>Nenhum dado disponível</p>
            )}
        </>
    )
}