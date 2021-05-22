import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTint } from '@fortawesome/free-solid-svg-icons';

const water = <FontAwesomeIcon icon={faTint} />
// const envelope = <FontAwesomeIcon icon={faEnvelope} />
// const Map = <FontAwesomeIcon icon={faMapMarkerAlt} />
// const Fb = <FontAwesomeIcon icon={faFacebookSquare} size="3x" />
// const LkIn = <FontAwesomeIcon icon={faLinkedin} size="3x" />
// const Twitter = <FontAwesomeIcon icon={faTwitterSquare} size="3x" />

export default function PlantBadge(props) {
    console.log(props)
    return (
        <>
            <div class="col-md-2 col-sm-5 water">
                 <p>{water}</p><p>Water</p><p>holder</p>
            </div>
        </>
    )
}
