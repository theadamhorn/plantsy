import React, { useState } from 'react';
import Modal from "./Modal";
import ModalButton from "./ModalButton";

export default function Accordion(props) {
    var [user, setUser] = useState(false);
    var [plant, setPlant] = useState(false);

    if(props.user){setUser(true)}
    if(props.plant){setPlant(true)}

    const plants = props.plant;
    const users = props.user;
    const plantHead = <> {plant.genus} {plant.species} {plant.variety} --- {plant.common_name} </>;
    const userHead = <> {user.name} </>;
    const plantBody = <>        
            <ModalButton plantID={plant.id}/>   
            <PlantModal 
            genus={plant.genus}
            species={plant.species}
            variety={plant.variety}
            commonName={plant.common_name}
            photo={plant.photo}
            watering={plant.watering}
            temperature={plant.temperature}
            humdity={plant.humdity}
            light={plant.light}
            description={plant.description}
            care={plant.care}
            />
            </>;
    const userBody = <>
    <Modal />

    </>


    return (
        <div>
            <div className="accordion">
            {plants.map(plant => {
                return (
                <div className="accordion-item" key={plant.id}>
                    <h2 className="accordion-header" id={"heading" + plant.id}>
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse" + plant.id} aria-expanded="true" aria-controls={"collapse" + plant.id}>
                        {user ? userHead : ``}
                        {plant ? plantHead : ``}
                    </button>
                    </h2>
                    <div id={"collapse" + plant.id} className="accordion-collapse collapse" aria-labelledby={"heading" + plant.id} data-bs-parent={"#heading" + plant.id}>
                        <div className="accordion-body">
                        {user ? userBody : ``}
                        {plant ? plantBody: ``}
                        </div>
                    </div>
                </div>
            )})}
            </div> 
        </div>)
}
