import React from "react";
import { NavLink } from "react-router-dom";
import './Ciudad.css';

export default function Ciudad({city}) {
    return (
        <div className="ciudad">
            <div className="container">
                <h2 className='name'>{city.name}</h2>
                <div className="info">
                    <div>Temperatura: {city.temp} ºC</div>
                    <div>Clima: {city.weather}</div>
                    <div>Viento: {city.wind} km/h</div>
                    <div>Cantidad de nubes: {city.clouds}</div>
                    <div>Latitud: {city.latitud}º</div>
                    <div>Longitud: {city.longitud}º</div>
                </div>
                <NavLink to= '/'>
                <button className='back-btn'>Volver</button>
                </NavLink>
            </div>
        </div>
    )
};