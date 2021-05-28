import React from 'react'
import PlantModal from "./ModalPlant";
import PlantBadge from "./PlantBadge";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSeedling } from '@fortawesome/free-solid-svg-icons'

function AccordionUser(props) {
    var ownedPlants = props.ownedPlants;
    console.log("Hi I'm ownedPlants from user Accordion\n" + ownedPlants +"\n ownedPlants from uder Accordion over and out!");
    return (
        <div>
        <div className="accordion">
            {ownedPlants && ownedPlants.map(plant => {
                return (
                    <div className="accordion-item" key={plant.id}>
                        <h2 className="accordion-header" id={"heading" + plant.id}>
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse" + plant.id} aria-expanded="true" aria-controls={"collapse" + plant.id}>
                                {plant.genus} {plant.species} --- {plant.common_name}

                            </button>
                        </h2>
                        <div id={"collapse" + plant.id} className="accordion-collapse collapse" aria-labelledby={"heading" + plant.id} data-bs-parent={"#heading" + plant.id}>
                            <div className="accordion-body">
                                <div className="row justify-content-evenly">
                                    <PlantModal
                                        id={plant.id}
                                        genus={plant.genus}
                                        species={plant.species}
                                        variety={plant.variety}
                                        common_name={plant.common_name}
                                        photo={plant.photo}
                                        watering={plant.watering}
                                        temperature={plant.temperature}
                                        humidity={plant.humidity}
                                        light={plant.light}
                                        description={plant.description}
                                        care = {plant.care}
                                        />
                                    <PlantBadge
                                        watering={plant.watering}
                                        temperature={plant.temperature}
                                        humidity={plant.humidity}
                                        light={plant.light}
                                    />
                                    <div className="col-auto plant">
                                        <button type="button" className="plant_button" data-bs-toggle="modal" data-bs-target={"#plantModal" + plant.id}>
                                        <p><FontAwesomeIcon icon={faSeedling} className="fa-2x" /></p>
                                            <p>Plant</p>
                                            <p>Profile</p>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
    )
}

export default AccordionUser
