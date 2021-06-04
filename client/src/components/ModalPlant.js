import React, { useState, useContext} from 'react'
import EditPlantModal from '../components/ModalEditPlant';
import UserContext from "../utils/UserContext";
import API from "../utils/API";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSeedling } from '@fortawesome/free-solid-svg-icons'
function PlantModal(props) {
    const {user, login} = useContext(UserContext);

    const [modal, setModal] = useState(false);
    
    const [genus, setGenus] = useState(props.genus);
    const [species, setSpecies] = useState(props.species);
    const [variety, setVariety] = useState(props.variety);
    const [commonName, setCommonName] = useState(props.common_name);
    const [photo , setPhoto]= useState(props.photo);
    const [water, setWater] = useState(props.watering);   
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
        API.createOwnedPlants(user.id , body)
        .catch(err => { console.error(err) })
      }
    return (
        
        <>
        <Button style={{ 
                        color: "#e4d7d0",
                        fontFamily: "Kiwi Maru",
                        fontWeight: 700,
                        backgroundColor: "#0a4158",
                        paddingLeft: "1em",
                        paddingRight: "1em",
                        paddingTop: "0.5em",
                        paddingBottom: "0.5em",
                        borderRadius: "10px"}} className="plant_button" onClick={()=>setModal(true)}><p><FontAwesomeIcon icon={faSeedling} className="fa-2x" /></p>
                                                <p>Plant</p>
                                                <p>Profile</p></Button>
        <Modal aria-labelledby="contained-modal-title-vcenter" centered show={modal} onHide={() => setModal(false)}>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                        <h5 className="modal-title" id="modalLabel">
                            {props.genus} {props.species} {props.variety} | {props.common_name}</h5>
                </Modal.Title>          
            </Modal.Header>
                <Modal.Body>
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
                </Modal.Body>
                <Modal.Footer>
                    { document.location.pathname === "/plants" ? <button className="btn add-plant-button" type="button" value={props.id} onClick={event => addPlantToGarden(event)}>Add Plant</button>  : ""}
                    { document.location.pathname === "/profile" ? <EditPlantModal plantID={props.id} genus ={props.genus} species ={props.species} variety={props.variety} common_name={props.common_name} water={props.watering} temperature={props.temperature} humidity={props.humidity} light={props.light} description={props.description} care={props.care} getOwnedPlants= {props.getOwnedPlants}/>  : ""}
                        <Button style={{ 
                        color: "#e4d7d0",
                        fontFamily: "Kiwi Maru",
                        fontWeight: 700,
                        backgroundColor: "#0a4158",
                        paddingLeft: "1em",
                        paddingRight: "1em",
                        paddingTop: "0.5em",
                        paddingBottom: "0.5em",
                        borderRadius: "10px"}} onClick={()=>setModal(false)}>Close</Button>                       
                </Modal.Footer>
        </Modal>
        </>
    );
}

export default PlantModal;