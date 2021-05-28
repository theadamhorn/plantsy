import React, { useEffect, useState } from 'react';
import PlantModal from "./ModalPlant";
import AccordionPlants from "./AccordionPlants";
import AccordionUser from "./AccordionUser";
import PlantBadge from "./PlantBadge";
import { Accordion, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSeedling } from '@fortawesome/free-solid-svg-icons'

function AccordionGardeners(props) {
    var gardeners = props.gardeners;
    return (
        <div>
            <div className="accordion">
                    {gardeners.data && gardeners.data.map(gardener => {
                        return (
                            <div className="accordion-item" key={gardener.id + gardener.email}>
                                <h2 className="accordion-header" id={"heading" + gardener.id}>
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse" + gardener.id} aria-expanded="true" aria-controls={"collapse" + gardener.id}>
                                        {gardener.name}
                                     
                                    </button>
                                </h2>
                                <div id={"collapse" + gardener.id} className="accordion-collapse collapse" aria-labelledby={"heading" + gardener.id} data-bs-parent={"#heading" + gardener.id}>
                                    <div className="accordion-body deco">
                                      There will be a magical button that will go here that will open a modal, inside of which will be another accordion which will display the plants of the users.
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
