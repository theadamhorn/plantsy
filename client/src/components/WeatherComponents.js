import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun , faCloudSun , faCloud , faCloudSunRain , faCloudShowersHeavy , faBolt , faSnowflake , faSmog  } from '@fortawesome/free-solid-svg-icons'
function WeatherSearch (props) {
 
 console.log(props);
    var variable;

    var weatherIcon; 
    if(props === !undefined){
        weatherIcon= props.data.weather.icon.substring(0,2);
    } else{
        weatherIcon = '';
    }  
    switch (weatherIcon){
    case '01':
        variable = faSun;
        break;
    case '02':
        variable = faCloudSun;
        break;
    case '03':
        variable = faCloud;
        break;
    case '04':
        variable = faCloud;
        break;
    case '09':
        variable = faCloudSunRain;
        break;
    case '10':
        variable = faCloudShowersHeavy;
        break;
    case '11':
        variable = faBolt;
        break;
    case '13':
        variable = faSnowflake;
        break;
    case '50':
        variable = faSmog;
        break;
    default:
        variable = faSun;
        break;
                   }         

    return(
        <>
        <p><FontAwesomeIcon icon={variable} className="fa-lg" />  {props.search}</p>
        <p>{props.data.main.temp}&#176; F {props.data.main.humidity}% humidity</p>
        </>
    );
}
export default WeatherSearch;