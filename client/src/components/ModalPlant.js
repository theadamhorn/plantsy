import React, { useState, useContext} from 'react'
import EditPlantModal from '../components/ModalEditPlant';
import UserContext from "../utils/UserContext";
import API from "../utils/API";
function PlantModal(props) {
    const {user, login} = useContext(UserContext);
    
    const [genus, setGenus] = useState(props.genus);
    const [species, setSpecies] = useState(props.species);
    const [variety, setVariety] = useState(props.variety);
    const [commonName, setCommonName] = useState(props.common_name);
    const [photo , setPhoto]= useState(props.photo);
    const [water, setWater] = useState(props.water);   
    const [temperature, setTemperature] = useState(props.temperature);
    const [humidity, setHumidity] = useState(props.humidity);
    const [light, setLight] = useState(props.light);
    const [description, setDescription] = useState(props.description);
    const [care, setCare] = useState(props.care);
    const addPlantToGarden = async (event)=> {

        event.preventDefault();
    

       const body = {
        genus: genus ,
        species: species , 
        variety: variety , 
        common_name: commonName , 
        watering: water , 
        temperature: temperature , 
        humidity: humidity , 
        light: light , 
        description: description ,
        care: care ,
        photo: photo
        }
        API.createOwnedPlants(user.id , body).then( res=>{
            alert('Plant Added!');
        })
        .catch(err => { console.error(err) })
      }
    return (
        <div className="modal fade" id={"plantModal" + props.id} data-bs-backdrop="false"
            data-bs-keyboard="false" tabIndex="-1" aria-labelledby="modalLabel"
            aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content plant_profile">
                    <div className="modal-header">
                        <h5 className="modal-title" id="modalLabel">
                            {props.genus} {props.species} {props.variety} | {props.common_name}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col">
                                <img className="plantPhoto" src={props.photo} />
                            </div>
                        </div>
                       <br/>
                        <div className="row">
                            <div className="col-auto text-start">
                                <h5>Water:</h5>{props.watering}
                            </div>
                            <div className="col-auto text-start">
                                <h5>Temperature:</h5>{props.temperature}
                            </div>
                            <div className="col-auto text-start">
                                <h5>Humidity:</h5>{props.humidity}
                            </div>
                            <div className="col-auto text-start">
                                <h5>Light:</h5>{props.light}
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            {props.care ?
                            <div className="col-md-6 text-start">
                                <h5>Description:</h5>{props.description}
                            </div>
                            :
                            <div className="text-start">
                                <h5>Description:</h5>{props.description}
                            </div>
                            }
                            {props.care ? <div className="col-md-6 text-start">
                                <h5>Care:</h5>{props.care}
                            </div> : ""
                            }
                        </div>
                    </div>
                    <div className="modal-footer">
                    { document.location.pathname === "/plants" ? <button className="btn add-plant-button" type="button" value={props.id} onClick={event => addPlantToGarden(event)}>Add Plant</button>  : ""}
                       { document.location.pathname === "/profile" ? <EditPlantModal/>  : ""}
                        <button type="button" className="btn btn-secondary"
                            data-bs-dismiss="modal">Close</button>                         
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlantModal;