import React, { useState, useContext/*, useEffect*/ } from 'react';
import API from "../utils/API";
import UserContext from "../utils/UserContext";
import { useHistory } from 'react-router-dom'; // , useLocation,
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function AddPlantModal(props) {
  const [modal, setModal] = useState(false);

  const {user, login} = useContext(UserContext);
  const history = useHistory();
  
  const [genus, setGenus] = useState();
  const [species, setSpecies] = useState();
  const [variety, setVariety] = useState();
  const [commonName, setCommonName] = useState();
  const [water, setWater] = useState();
  const [temperature, setTemperature] = useState();
  const [humidity, setHumidity] = useState();
  const [light, setLight] = useState();
  const [description, setDescription] = useState();
  const [care, setCare] = useState();

const changeChecked = (event) =>{
  
}
// needs useEffect to re-render page
// try event.current target
//also try separate form
  const addPlant = async (event)=> {
    // Stop the browser from submitting the form so we can do so with JavaScript
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
    API.createOwnedPlants(user.id , body)
    .then(res =>{
      history.push("/profile");
    })
    .catch(err => { console.error(err) })
  }
  return (
    <>
    <Button size="lg" onClick={()=>setModal(true)} style={{
            color: "#e4d7d0",
            fontFamily: "Kiwi Maru",
            fontSize: "1em",
            backgroundColor: "#0a4158",
            paddingLeft: "1em",
            paddingRight: "1em",
            paddingTop: "0.5em",
            paddingBottom: "0.5em",
            borderRadius: "10px",
            borderWidth: "0px"
          }}>Add Plant</Button>

    <Modal aria-labelledby="contained-modal-title-vcenter" centered show={modal} onHide={() => setModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
            <h5 className="modal-title" id="newPlantLabel">New Plant <i className="fas fa-pencil-alt"></i></h5>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
            <form>
              <div className="row new_plant_1">
                <div className="col">
                  <label for="genusLabel">Genus:</label>
                  <input className="form-input" type="text" id="newgenus" placeholder="Genus" onChange={event => setGenus(event.target.value.trim())} />
                </div>
                <div className="col">
                  <label for="speciesLabel">Species:</label>
                  <input className="form-input" type="text" id="newspecies" placeholder="Species" onChange={event => setSpecies(event.target.value.trim())} />
                </div>
                <div className="col">
                  <label for="varietyLabel">Variety:</label>
                  <input className="form-input" type="text" id="newvariety" placeholder="Variety" onChange={event => setVariety(event.target.value.trim())}/>
                </div>
                <div className="col">
                  <label for="commonNameLabel">Common Name:</label>
                  <input className="form-input" type="text" id="newcommon_name" placeholder="Common Name" onChange={event => setCommonName(event.target.value.trim())}/>
                </div>
              </div>
              <div className="row plant_edit_2">
                <div className="col"> Water Needed:
                      <div className="form-check">
                    <input className="form-check-input" type="radio" name="newwaterNeeded" id="flexRadioDefault1" value="1" checked ={water === 1} onChange={setWater(1)} />
                    <label className="form-check-label" for="1">Low</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="newwaterNeeded" id="flexRadioDefault1" defaultChecked checked ={water === 2} value="2" onChange={setWater(3)} />
                    <label className="form-check-label" for="2">Medium</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="newwaterNeeded" id="flexRadioDefault1" value="3" checked ={water === 3} onChange={setWater(3)}  />
                    <label className="form-check-label" for="3">High</label>
                  </div>
                </div>
                <div className="col"> Temperature Needed:
                      <div className="form-check">
                    <input className="form-check-input" type="radio" name="newtempNeeded" id="flexRadioDefault2" value="low" checked={temperature === 1} onChange={setTemperature(1)}/>
                    <label className="form-check-label" for="flexRadioDefault2">Low</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="newtempNeeded" id="flexRadioDefault2" defaultChecked value="medium" checked={temperature === 2} onChange={setTemperature(2)}/>
                    <label className="form-check-label" for="flexRadioDefault2">Medium</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="newtempNeeded" id="flexRadioDefault2" value="high" checked={temperature === 3} onChange={setTemperature(3)}/>
                    <label className="form-check-label" for="flexRadioDefault2">High</label>
                  </div>
                </div>
                <div className="col"> Humidity Needed:
                      <div className="form-check">
                    <input className="form-check-input" type="radio" name="newhumidNeeded" id="flexRadioDefault3" value="low" checked={humidity === 1} onChange={setHumidity(1)}/>
                    <label className="form-check-label" for="flexRadioDefault3">Low</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="newhumidNeeded" id="flexRadioDefault3" defaultChecked value="medium" checked={humidity === 2} onChange={setHumidity(2)}/>
                    <label className="form-check-label" for="flexRadioDefault3">Medium</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="newhumidNeeded" id="flexRadioDefault3" value="high" checked={humidity === 3} onChange={setHumidity(3)}/>
                    <label className="form-check-label" for="flexRadioDefault3">High</label>
                  </div>
                </div>
                <div className="col"> Light Needed:
                      <div className="form-check">
                    <input className="form-check-input" type="radio" name="newlightNeeded" id="flexRadioDefault4" value="low" checked={event => {if(event.target.checked){setLight(1)}}} onChange=""/>
                    <label className="form-check-label" for="flexRadioDefault4">Low</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="newlightNeeded" id="flexRadioDefault4" defaultChecked value="medium" checked={event => {if(event.target.checked){setLight(2)}}} onChange=""/>
                    <label className="form-check-label" for="flexRadioDefault4">Medium</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="newlightNeeded" id="flexRadioDefault4" value="high" checked={event => {if(event.target.checked){setLight(3)}}} onChange=""/>
                    <label className="form-check-label" for="flexRadioDefault4">High</label>
                  </div>
                </div>
              </div>
              <div className="row plant_edit_3">
                <div className="col-12">
                  <label for="description">Description:</label>
                  <textarea name="description" id="newdescription" row="5" cols="40" onChange={event => setDescription(event.target.value.trim())}>Describe the plant here</textarea>
                </div>
                <div className="col-12">
                  <label for="care">Care:</label>
                  <textarea name="care" id="newcare" row="5" cols="40" onChange={event => setCare(event.target.value.trim())}>Place your notes on proper care here</textarea>
                </div>
              </div>
              <div className="modal-footer">
                <Button style={{ 
                 color: "#e4d7d0",
                  fontFamily: "Kiwi Maru",
                  fontWeight: 700,
                  backgroundColor: "#0a4158",
                  paddingLeft: "1em",
                  paddingRight: "1em",
                  paddingTop: "0.5em",
                  paddingBottom: "0.5em",
                  borderRadius: "10px"}} onClick={addPlant}>Add to Collection</Button>
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
              </div>
            </form>
          </Modal.Body>
    </Modal>
    </>
  );
}

export default AddPlantModal;