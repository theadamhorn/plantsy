import React, { useEffect, useState } from 'react';
// import ModalPlant from "./ModalPlant";
// import ModalButton from "./ModalButton";
import PlantBadge from "./PlantBadge";

export default function Accordion(props) {
    var [Gardener, setGardener] = useState(false);
    var [Plant, setPlant] = useState(false);

useEffect(() =>{
    var location = document.location.pathname;

    if (location === '/plants') {
        setPlant(true);            
        // API call depending on the page, set results into hook, then pass hook into {Accordion}
    }
    if (location === '/gardeners') {
        setGardener(true)
    }
    
}, [props])


    var plants = props.plants;
    var users = props.users;

if(Plant === true && plants === undefined){
    plants =[ {
        plant: "Spider",
        genus: "Thug",
        species: "Monster",
        id: 12345,
        commonName: "Lovey Dovey"
    },{
        plant: "Burkin",
        genus: "Pretty",
        species: "Princess",
        id: 12346,
        commonName: "superDuper"
    }]
}
if(Gardener === true && users === undefined){
    users = [{
        name: "Bobby",
        id: 7775
    },{
        name: "Mark",
        id: 7777
    }]
}


console.log(props);
if(Plant === true){
    return (
        <div>
            <div className="accordion">
            {plants.map(plant => {
                return (
                <div className="accordion-item" key={plant._id}>
                    <h2 className="accordion-header" id={"heading" + plant._id}>
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse" + plant._id} aria-expanded="true" aria-controls={"collapse" + plant._id}>
                        {plant.genus} {plant.species} --- {plant.common_name}
                        
                    </button>
                    </h2>
                    <div id={"collapse" + plant._id} className="accordion-collapse collapse" aria-labelledby={"heading" + plant._id} data-bs-parent={"#heading" + plant._id}>
                        <div className="accordion-body">
                           {/* <ModalPlant
                           id={props._id}
                           genus={props.genus}
                           species={props.species}
                           variety={props.variety}
                           common_name={props.common_name}
                           photo={props.photo}
                           watering={props.watering}
                           temperature={props.temperature}
                           humidity={props.humidity}
                           light={props.light}
                           description={props.description}
                           /> */}
                            <PlantBadge
                            watering={plant.watering}
                            />
                        </div>
                    </div>
                </div>
            )})}
            </div> 
        </div>)}
        
        else if(Gardener === true){
            return(
            <div>
            <div className="accordion">
            {users.map(user => {
                return (
                <div className="accordion-item" key={user._id}>
                    <h2 className="accordion-header" id={"heading" + user._id}>
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse" + user._id} aria-expanded="true" aria-controls={"collapse" + user._id}>
                        {user.name}
                        
                    </button>
                    </h2>
                    <div id={"collapse" + user._id} className="accordion-collapse collapse" aria-labelledby={"heading" + user._id} data-bs-parent={"#heading" + user._id}>
                        <div className="accordion-body">
                            A users garden button will go here.
                        </div>
                    </div>
                </div>
            )})}
            </div> 
        </div>)}
        else return(<h1>No information to display</h1>)
        

}


