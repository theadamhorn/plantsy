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
    const [water, setWater] = useState();
    const [waterChecked , setWaterChecked]= useState();
    const [temperature, setTemperature] = useState();
    const [humidity, setHumidity] = useState();
    const [light, setLight] = useState();
    const [description, setDescription] = useState();
    const [care, setCare] = useState();

    const addPlant = async (event)=> {
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
      //history.push("/profile");
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
                                <input className="form-check-input" type="radio" name="waterNeeded" id="flexRadioDefault1" value="low" />
                                <label className="form-check-label" for="low">Low</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="waterNeeded" id="flexRadioDefault1" value="medium" checked />
                                <label className="form-check-label" for="medium">Medium</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="waterNeeded" id="flexRadioDefault1" value="High" />
                                <label className="form-check-label" for="high">High</label>
                            </div>
                        </article>
                        <article className="col"> Temperature Needed:
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="tempNeeded" id="flexRadioDefault2" value="low" />
                                <label className="form-check-label" for="flexRadioDefault2">Low</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="tempNeeded" id="flexRadioDefault2" value="medium" checked />
                                <label className="form-check-label" for="flexRadioDefault2">Medium</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="tempNeeded" id="flexRadioDefault2" value="high" />
                                <label className="form-check-label" for="flexRadioDefault2">High</label>
                            </div>
                        </article>
                        <article className="col"> Humidity Needed:
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="humidNeeded" id="flexRadioDefault3" value="low" />
                                <label className="form-check-label" for="flexRadioDefault3">Low</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="humidNeeded" id="flexRadioDefault3" value="medium" checked />
                                <label className="form-check-label" for="flexRadioDefault3">Medium</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="humidNeeded" id="flexRadioDefault3" value="high" />
                                <label className="form-check-label" for="flexRadioDefault3">High</label>
                            </div>
                        </article>
                        <article className="col"> Light Needed:
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="lightNeeded" id="flexRadioDefault4" value="low" />
                                <label className="form-check-label" for="flexRadioDefault4">Low</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="lightNeeded" id="flexRadioDefault4" value="medium" checked />
                                <label className="form-check-label" for="flexRadioDefault4">Medium</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="lightNeeded" id="flexRadioDefault4" value="high" />
                                <label className="form-check-label" for="flexRadioDefault4">High</label>
                            </div>
                        </article>
                    </section>
                    <section className="row plant_edit_3">
                        <div className="col-12">
                            <label for="description">Description:</label>
                            <textarea name="description" id="description" row="5" cols="40" onChange={event => setDescription(event.target.value.trim())}>{props.description}</textarea>
                        </div>
                        <div className="col-12">
                            <label for="care">Care:</label>
                            <textarea name="care" id="care" row="5" cols="40">{props.care}</textarea>
                        </div>
                    </section>
                    <Modal.Footer>
                        <button type="submit" id="saveEdit" value="submit" className="btn btn-danger">Save</button>
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