import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faSun, faThermometer, faTint } from '@fortawesome/free-solid-svg-icons';

const water = <FontAwesomeIcon icon={faTint} size="2x"/>
const thermometer = <FontAwesomeIcon icon={faThermometer} size="2x"/>
const humidity = <FontAwesomeIcon icon={faCloud} size="2x"/>
const light = <FontAwesomeIcon icon={faSun} size="2x"/>

export default function PlantBadge(props) {


    var level = "";
    if(props.watering === "1" || props.light === "1" || props.temperature === "1" || props.humidity === "1"){ level = "Low"}
    if(props.watering === "2" || props.light === "2" || props.temperature === "2" || props.humidity === "2"){ level = "Medium"}
    if(props.watering === "3" || props.light === "3" || props.temperature === "3" || props.humidity === "3"){ level = "High"}

    console.log(props)
    return (
        <>
        <div className="row">
            <div className="col-md-2 col-sm-5 water">
                 <p>{water}</p><p>Water</p><p>{level}</p>
            </div>
            <div className="col-md-2 col-sm-5 temp">
                <p>{thermometer}</p><p>Temp</p><p>{level}</p>
            </div>
            <div className="col-md-2 col-sm-5 humidity">
                <p>{humidity}</p><p>Humidity</p><p>{level}</p>
            </div>
            <div className="col-md-2 col-sm-5 light">
                <p>{light}</p><p>Light</p><p>{level}</p>
            </div>
        </div>
        </>
    )
}
