
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCityClima } from "../redux/action";
import Nav from "./Nav/Nav";
import "./home.css"


const Home =()=>{
    const dispatch=useDispatch();

    const allClima=useSelector((state)=>state.allClima)



      const handleSearch=async(name)=>{
        try{
          dispatch(getCityClima(name));
        }catch(error){
          console.error(error);
        }
      }

      return (
        <div className="container mt-5">
          <nav className="nav_home">
            <Nav onSearch={handleSearch} />
          </nav>
          <div className="Clima_container">
            {allClima && allClima.location && 
              <div>
                <h1>
                  {allClima.location.name}, {allClima.location.country}
                </h1>
                <p>Time: {allClima.location.localtime}</p>
                <p>Temperature: {allClima.current.temperature}°C</p>
                <div className="weather_icon">
                  <p>Weather: {allClima.current.weather_descriptions[0]}</p>
                  <img src={allClima.current.weather_icons[0]} alt="weather icon" />
                </div>
                <p>Wind Speed: {allClima.current.wind_speed} km/h</p>
                <p>Humidity: {allClima.current.humidity}%</p>
                <p>time zone: {allClima.location.timezone_id}</p>
              </div>
            }
          </div>
        </div>
      );
    };


export default Home;