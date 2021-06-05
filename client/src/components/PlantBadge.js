import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faSun, faThermometer, faTint } from '@fortawesome/free-solid-svg-icons';

const water = <FontAwesomeIcon icon={faTint} size="2x"/>
const thermometer = <FontAwesomeIcon icon={faThermometer} size="2x"/>
const humidity = <FontAwesomeIcon icon={faCloud} size="2x"/>
const light = <FontAwesomeIcon icon={faSun} size="2x"/>

export default function PlantBadge(props) {
    return (
        <>
        
            <div className="col-md-2 col-sm-5 water">
                 <p>{water}</p><p>Water</p><p>{props.watering}</p>
            </div>
            <div className="col-md-2 col-sm-5 temp">
                <p>{thermometer}</p><p>Temp</p><p>{props.temperature}</p>
            </div>
            <div className="col-md-2 col-sm-5 humidity">
                <p>{humidity}</p><p>Humidity</p><p>{props.humidity}</p>
            </div>
            <div className="col-md-2 col-sm-5 light">
                <p>{light}</p><p>Light</p><p>{props.light}</p>
            </div>
        
        </>
    )
}
