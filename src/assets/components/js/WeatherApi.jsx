import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { WeatherContext } from "./WeatherContext.jsx";

export default function WeatherApi(){
    const apikey = "b51fe3da165a019d2e32946960f50a78";
    const { weatherData, setWeatherData } = useContext(WeatherContext);
    const [city, setCity] = useState("");
    const navigate = useNavigate();

    const getWeatherData = async (city) => {
        const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}&lang=pt_br`;

        try {
            const res = await fetch(apiWeatherURL);
            const data = await res.json();
            console.log(data);
            return data;
        } catch (error) {
            console.error("Erro ao buscar dados da cidade:", error);
        }
    };

    useEffect(() => {
        const fetchWeather = async () => {
            const data = await getWeatherData(city);
            setWeatherData(data);
        };

        if (city) {
            fetchWeather();
        }
    }, [city]);

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
          event.preventDefault();
          if(weatherData.message){
            alert(`Cidade: "${city}" invalida!`);
        }else{
            navigate(`/pagClima`);
        }
        }
      };

    const handleSearch = () => {
        if(weatherData.message){
            alert(`Cidade: "${city}" invalida!`);
        }else{
            navigate(`/pagClima`);
        }
    };

    return (
        <div className="search-form">
            <input 
                type="text" 
                value={city} onKeyDown={handleKeyDown} 
                onChange={(e) => setCity(e.target.value)} 
                placeholder='Digite o nome de uma cidade...' 
                name='cityName' 
                id='cityName' 
                className="search-city" required
            />
            <input 
                type="button" 
                onClick={handleSearch} 
                className="submit-button material-symbols-outlined" 
                value="Search" 
            />
        </div>
    );
}