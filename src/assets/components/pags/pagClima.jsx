import React, { useEffect, useContext } from "react"
import '../css/pagClima.css'
import '../css/pagClimaMQ.css'
import Relogio from "../js/relogio"
import Calendario from "../js/Calendario"

import WeatherInfo from "../js/WeatherInfo"
import HumidityInfo from "../js/humidityInfo"
import WindInfo from "../js/windInfo"
import CityName from "../js/cityName"
import TempInfo from "../js/TempInfo"

import { WeatherContext } from "../js/WeatherContext";

export default function PagClima(){
    const { weatherData, setWeatherData } = useContext(WeatherContext);
    const data = localStorage.getItem("weatherData")
    const objeto = JSON.parse(data)

    useEffect(()=>{
        if(weatherData == null){
            setWeatherData(objeto);
        }
    })

    return(
        <>
            <div className='background'></div>
            <section className='pagClima-content'>
                <div className='infoDiv'>
                    {<WeatherInfo/>}
                    {<HumidityInfo/>}
                    {<WindInfo/>}
                </div>
                <div className='imgDiv'>
                    <div className='imgDiv-background'></div>
                    <div className='imgDiv-info'>
                    {<CityName/>}
                    {<TempInfo/>}
                    <div className='info-date'>
                        <span className='info-hours-text'><Relogio/></span>
                        <span className='info-date-text'><Calendario/></span>
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}