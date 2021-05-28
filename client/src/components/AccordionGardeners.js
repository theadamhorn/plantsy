import React, { useEffect, useState } from 'react';
import PlantModal from "./ModalPlant";
import AccordionPlants from "./AccordionPlants";
import AccordionUser from "./AccordionUser";
import PlantBadge from "./PlantBadge";
<<<<<<< HEAD
import { Accordion, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSeedling } from '@fortawesome/free-solid-svg-icons'
=======
import GardenersModal from './ModalGardeners';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSeedling } from '@fortawesome/free-solid-svg-icons'
>>>>>>> 096daf83b0d26fd8852fe940e57822383b207afc

function AccordionGardeners(props) {
    var gardeners = props.gardeners;
    return (
        <div>
            <div className="accordion">
                    {gardeners.data && gardeners.data.map(gardener => {
                        {{console.log(gardener)}}
                        return (
                            <div className="accordion-item" key={gardener.id + gardener.email}>
                                <h2 className="accordion-header" id={"heading" + gardener.id}>
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse" + gardener.id} aria-expanded="true" aria-controls={"collapse" + gardener.id}>
                                        {gardener.name}
                                     
                                    </button>
                                </h2>
                                <div id={"collapse" + gardener.id} className="accordion-collapse collapse" aria-labelledby={"heading" + gardener.id} data-bs-parent={"#heading" + gardener.id}>
                                    <div className="accordion-body deco">
<<<<<<< HEAD
                                      There will be a magical button that will go here that will open a modal, inside of which will be another accordion which will display the plants of the users.
=======
                                        A users garden button will go here. The list is just filler to show rendering of the {gardener.name}'s Plants.
                                        { gardener.Owned_Plants.length >= 1? <GardenersModal OwnedPlants={gardener.Owned_Plants} name= {gardener.name}/> : ""}

>>>>>>> 096daf83b0d26fd8852fe940e57822383b207afc
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
        </div>
    )
}

export default AccordionGardeners
