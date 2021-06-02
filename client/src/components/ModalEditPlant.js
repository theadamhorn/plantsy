import React, { useState, useContext} from "react";
import API from "../utils/API";
import UserContext from "../utils/UserContext";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt} from '@fortawesome/free-solid-svg-icons'
// needs useEffect to re-render page as well as api call checked and radio buttons messed with
function EditPlantModal(props) {
    const [modal, setModal] = useState(false);

    const {user, login} = useContext(UserContext);

    const [genus, setGenus] = useState();
    const [species, setSpecies] = useState();
    const [variety, setVariety] = useState();
    const [commonName, setCommonName] = useState();
    const [water, setWater] = useState(props.water);
    const [temperature, setTemperature] = useState(props.temperature);
    const [humidity, setHumidity] = useState(props.humidity);
    const [light, setLight] = useState(props.light);
    const [description, setDescription] = useState();
    const [care, setCare] = useState();


    const editPlant = async (event)=> {
        
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
    care: care
    }
    API.updateOwnedPlants(user.id , body)
    .then(res =>{
        setModal(false);
        props.getOwnedPlants();
    })
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
                            borderRadius: "10px"}} onClick={()=>setModal(true)}>Edit Plant</Button>

        <Modal aria-labelledby="contained-modal-title-vcenter" centered show={modal} onHide={() => setModal(false)}>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h5 className="modal-title" id="modal2{props.id}Label">Editor <FontAwesomeIcon icon={faPencilAlt} className="fa-md" />... {props.genus} {props.species} {props.variety}</h5>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <section className="row plant_edit_1">
                        <div id="plantID">
                            {props.id}
                        </div>
                        <div className="col">
                            <label for="genusLabel">Genus:</label>
                            <input className="form-input" type="text" id="genus" value={props.genus} onChange={event => setGenus(event.target.value.trim())} />
                        </div>
                        <div className="col">
                            <label for="speciesLabel">Species:</label>
                            <input className="form-input" type="text" id="species" value={props.species} onChange={event => setSpecies(event.target.value.trim())} />
                        </div>
                        <div className="col">
                            <label for="varietyLabel">Variety:</label>
                            <input className="form-input" type="text" id="variety" value={props.variety} onChange={event => setVariety(event.target.value.trim())} />
                        </div>
                        <div className="col">
                            <label for="commonNameLabel">Common Name:</label>
                            <input className="form-input" type="text" id="common_name" value={props.common_name} onChange={event => setCommonName(event.target.value.trim())} />
                        </div>
                    </section>
                    <section className="row plant_edit_2">
                        <article className="col"> Water Needed:
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="waterNeeded" id="flexRadioDefault1" value="low"checked ={water === 'low'} onChange={event => {setWater('low')}} />
                                <label className="form-check-label" for="low">Low</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="waterNeeded" id="flexRadioDefault1" value="medium" checked ={water === 'medium'} onChange={event => {setWater('medium')}} />
                                <label className="form-check-label" for="medium">Medium</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="waterNeeded" id="flexRadioDefault1" value="high" checked ={water === 'high'} onChange={event => {setWater('high')}}/>
                                <label className="form-check-label" for="high">High</label>
                            </div>
                        </article>
                        <article className="col"> Temperature Needed:
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="tempNeeded" id="flexRadioDefault2" value="low" checked={temperature === 1} onChange={event => {setTemperature(1)}} />
                                <label className="form-check-label" for="flexRadioDefault2">Low</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="tempNeeded" id="flexRadioDefault2" value="medium" checked={temperature === 2} onChange={event => {setTemperature(2)}} />
                                <label className="form-check-label" for="flexRadioDefault2">Medium</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="tempNeeded" id="flexRadioDefault2" value="high" checked={temperature === 3} onChange={event => {setTemperature(3)}}/>
                                <label className="form-check-label" for="flexRadioDefault2">High</label>
                            </div>
                        </article>
                        <article className="col"> Humidity Needed:
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="humidNeeded" id="flexRadioDefault3" value="low" checked={humidity === 1} onChange={event => {setHumidity(1)}} />
                                <label className="form-check-label" for="flexRadioDefault3">Low</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="humidNeeded" id="flexRadioDefault3" value="medium" checked={humidity === 2} onChange={event => {setHumidity(2)}} />
                                <label className="form-check-label" for="flexRadioDefault3">Medium</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="humidNeeded" id="flexRadioDefault3" value="high" checked={humidity === 3} onChange={event => {setHumidity(3)}} />
                                <label className="form-check-label" for="flexRadioDefault3">High</label>
                            </div>
                        </article>
                        <article className="col"> Light Needed:
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="lightNeeded" id="flexRadioDefault4" value="low" checked={light === 1} onChange={event =>{setLight(1)}}/>
                                <label className="form-check-label" for="flexRadioDefault4">Low</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="lightNeeded" id="flexRadioDefault4" value="medium" checked={light === 2} onChange={event =>{setLight(2)}} />
                                <label className="form-check-label" for="flexRadioDefault4">Medium</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="lightNeeded" id="flexRadioDefault4" value="high" checked={light === 3} onChange={event =>{setLight(3)}}/>
                                <label className="form-check-label" for="flexRadioDefault4">High</label>
                            </div>
                        </article>
                    </section>
                    <section className="row plant_edit_3">
                        <div className="col-12">
                            <label for="description">Description:</label>
                            <textarea name="description" id="description" row="5" cols="40" defaultValue={props.description} onChange={event => setDescription(event.target.value.trim())}></textarea>
                        </div>
                        <div className="col-12">
                            <label for="care">Care:</label>
                            <textarea name="care" id="care" row="5" cols="40" defaultValue={props.care} onChange={event => setCare(event.target.value.trim())}></textarea>
                        </div>
                    </section>
                    <Modal.Footer>
                        <button type="submit" id="saveEdit" value="submit" className="btn btn-danger"onClick={()=>editPlant}>Save</button>
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
                </form>
            </Modal.Body>
        </Modal>
        </>
    );
}

export default EditPlantModal;