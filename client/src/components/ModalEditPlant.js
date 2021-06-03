import React, {useState} from "react";
import API from "../utils/API";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt} from '@fortawesome/free-solid-svg-icons'
// needs useEffect to re-render page as well as api call checked and radio buttons messed with
function EditPlantModal(props) {
    const [modal, setModal] = useState(false);



    const [genus, setGenus] = useState(props.genus);
    const [species, setSpecies] = useState(props.species);
    const [variety, setVariety] = useState(props.variety);
    const [commonName, setCommonName] = useState(props.common_name);
    const [water, setWater] = useState(props.water);  
    const [temperature, setTemperature] = useState(props.temperature);  
    const [humidity, setHumidity] = useState(props.humidity); 
    const [light, setLight] = useState(props.light);  
    const [description, setDescription] = useState(props.description);
    const [care, setCare] = useState(props.care);


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
    API.updateOwnedPlants(props.plantID , body)
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
                            <label htmlFor="genusLabel">Genus:</label>
                            <input className="form-input" type="text" id="genus" defaultValue={genus} onChange={event => setGenus(event.target.value.trim())} />
                        </div>
                        <div className="col">
                            <label htmlFor="speciesLabel">Species:</label>
                            <input className="form-input" type="text" id="species" defaultValue={species} onChange={event => setSpecies(event.target.value.trim())} />
                        </div>
                        <div className="col">
                            <label htmlFor="varietyLabel">Variety:</label>
                            <input className="form-input" type="text" id="variety" defaultValue={variety} onChange={event => setVariety(event.target.value.trim())} />
                        </div>
                        <div className="col">
                            <label htmlFor="commonNameLabel">Common Name:</label>
                            <input className="form-input" type="text" id="common_name" defaultValue={commonName} onChange={event => setCommonName(event.target.value.trim())} />
                        </div>
                    </section>
                    <section className="row plant_edit_2">
                        <article className="col"> Water Needed:
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="waterNeeded" id="flexRadioDefault1" value="low"checked ={water === 'Low'} onChange={() => {setWater('Low')}} />
                                <label className="form-check-label" htmlFor="low">Low</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="waterNeeded" id="flexRadioDefault1" value="medium" checked ={water === 'Medium'} onChange={() => {setWater('Medium')}} />
                                <label className="form-check-label" htmlFor="medium">Medium</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="waterNeeded" id="flexRadioDefault1" value="high" checked ={water === 'High'} onChange={() => {setWater('High')}}/>
                                <label className="form-check-label" htmlFor="high">High</label>
                            </div>
                        </article>
                        <article className="col"> Temperature Needed:
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="tempNeeded" id="flexRadioDefault2" value="low" checked={temperature === 'Low'} onChange={() => {setTemperature("Low")}} />
                                <label className="form-check-label" htmlFor="flexRadioDefault2">Low</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="tempNeeded" id="flexRadioDefault2" value="medium" checked={temperature === 'Medium'} onChange={() => {setTemperature("Medium")}} />
                                <label className="form-check-label" htmlFor="flexRadioDefault2">Medium</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="tempNeeded" id="flexRadioDefault2" value="high" checked={temperature === "High"} onChange={() => {setTemperature('High')}}/>
                                <label className="form-check-label" htmlFor="flexRadioDefault2">High</label>
                            </div>
                        </article>
                        <article className="col"> Humidity Needed:
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="humidNeeded" id="flexRadioDefault3" value="low" checked={humidity === "Low"} onChange={() => {setHumidity("Low")}} />
                                <label className="form-check-label" htmlFor="flexRadioDefault3">Low</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="humidNeeded" id="flexRadioDefault3" value="medium" checked={humidity === "Medium"} onChange={() => {setHumidity("Medium")}} />
                                <label className="form-check-label" htmlFor="flexRadioDefault3">Medium</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="humidNeeded" id="flexRadioDefault3" value="high" checked={humidity === 'High'} onChange={() => {setHumidity('High')}} />
                                <label className="form-check-label" htmlFor="flexRadioDefault3">High</label>
                            </div>
                        </article>
                        <article className="col"> Light Needed:
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="lightNeeded" id="flexRadioDefault4" value="low" checked={light === 'Low'} onChange={() =>{setLight('Low')}}/>
                                <label className="form-check-label" htmlFor="flexRadioDefault4">Low</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="lightNeeded" id="flexRadioDefault4" value="medium" checked={light === 'Medium'} onChange={() =>{setLight('Medium')}} />
                                <label className="form-check-label" htmlFor="flexRadioDefault4">Medium</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="lightNeeded" id="flexRadioDefault4" value="high" checked={light === 'High'} onChange={() =>{setLight('High')}}/>
                                <label className="form-check-label" htmlFor="flexRadioDefault4">High</label>
                            </div>
                        </article>
                    </section>
                    <section className="row plant_edit_3">
                        <div className="col-12">
                            <label htmlFor="description">Description:</label>
                            <textarea className="form-control" name="description" id="description" rows={5} cols={40} value={description} onChange={event => setDescription(event.target.value.trim())}/>
                        </div>
                        <div className="col-12">
                            <label htmlFor="care">Care:</label>
                            <textarea className="form-control" name="care" id="care" rows={5} cols={40} value={care} onChange={event => setCare(event.target.value.trim())}/>
                        </div>
                    </section>
                    <Modal.Footer>
                        <button type="submit" id="saveEdit" value="submit" className="btn btn-danger"onClick={editPlant}>Save</button>
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