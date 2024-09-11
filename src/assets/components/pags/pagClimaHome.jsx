import React from "react";
import '../css/AppMediaQuery.css'
import { useNavigate } from "react-router-dom";
import Relogio from "../js/relogio";
import Calendario from "../js/Calendario";

import WeatherApi from "../js/WeatherApi";

export default function PagClimaHome(){
    const navigate = useNavigate();

    const handleSearch = () => {
        navigate(`/pagClima`);
    };

    return(
        <>
            <div className='background'></div>
            <section className='content'>
                <div className='search-div'>
                    {<WeatherApi/>}
                </div>
                <div className='info-div'>
                    <p className='hours'><Relogio/></p>
                    <p className='date'><Calendario/></p>
                </div>
            </section>
        </>
    )
}