import React from 'react';
import { NavLink } from 'react-router-dom';
import './About.css';
import Email from '../img/email.png'
import LinkedIn from'../img/linkedin-logo.png'
export default function About(){
    return(
        <div className='about-info'>
            <p className='info'>Les presento mi  Weather App, es una SPA (single page aplication) para hacerla utilice React, en la app se puede ver información del clima de las ciudades del mundo. La Api utilizada fue Open Weather App.
            <hr />
           Leandro Marrocchi<br />
            Desarrollador Full Stack Developer
            </p>
            <div className="contactInfo tag">
          <img src={Email} alt="email" height="30" width="30" />
          <a href="mailto:leaa.marrocchi@gmail.com" target="_blank">
            <h4>leaa.marrocchi@gmail.com</h4>
          </a>
        </div>
        <div className="contactInfo tag">
          <img src={LinkedIn} alt="linkedIn" height="30" width="30" />
          <a href="https://www.linkedin.com/in/leandro-marrocchi-18b0471a0/" target="_blank">
            <h4>Leandro Marrocchi</h4>
          </a>
        </div>
            <NavLink to='/'>
                <button className='go-home'>Volver al inicio</button>
            </NavLink>
        </div>
    )
}