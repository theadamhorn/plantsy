import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSeedling } from '@fortawesome/free-solid-svg-icons'


function Landing() {

    return (
        <>
            <div class="hero-image">
                <div class="hero-text">
                    <p id="hero-text-1"><FontAwesomeIcon icon={faSeedling} className="fa-lg" /> Plantsy</p>
                    <p id="hero-text-2">Helping you take care of life.</p>
                </div>
            </div>
        </>
    )
}

export default Landing;