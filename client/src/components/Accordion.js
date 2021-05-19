import React, { useEffect, useState } from 'react';
import PlantModal from "./PlantModal";
// import ModalButton from "./ModalButton";

export default function Accordion(props) {
    var [user, setUser] = useState(false);
    var [plant, setPlant] = useState(false);

useEffect(() =>{
    // These may need to be updated, I wrote this based on some assumptions on the passed props.
    if(props.user === !null){setUser(true)}
    else setUser(false);

    if(props.plant === !null){setPlant(true)}
    else setPlant(false);
    
}, [])


    const plants = props.plants;
    const users = props.user;



    return (
        <div>
            <div className="accordion">
            {plants.map(plant => {
                return (
                <div className="accordion-item" key={plant.id}>
                    <h2 className="accordion-header" id={"heading" + plant.id}>
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse" + plant.id} aria-expanded="true" aria-controls={"collapse" + plant.id}>
                        {user ? `${user.name}`  : ``}
                        {plant ? `${plant.genus} ` + `${plant.species} ` + ` --- ` + ` ${plant.commonName}`  : ``}
                        
                    </button>
                    </h2>
                    <div id={"collapse" + plant.id} className="accordion-collapse collapse" aria-labelledby={"heading" + plant.id} data-bs-parent={"#heading" + plant.id}>
                        <div className="accordion-body">
                            Stuff
                        </div>
                    </div>
                </div>
            )})}
            </div> 
        </div>)



}


