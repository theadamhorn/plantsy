import React, { useState, useContext} from 'react';
import API from "../utils/API";
import UserContext from "../utils/UserContext";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function AddPlantModal(props) {
  const [modal, setModal] = useState(false);

  const {user, login} = useContext(UserContext);
  
  const [genus, setGenus] = useState();
  const [species, setSpecies] = useState();
  const [variety, setVariety] = useState();
  const [commonName, setCommonName] = useState();
  const [water, setWater] = useState(2);
  const [temperature, setTemperature] = useState(2);
  const [humidity, setHumidity] = useState(2);
  const [light, setLight] = useState(2);
  const [description, setDescription] = useState();
  const [care, setCare] = useState();
  const [photo , setPhoto] = useState();



  // const fileHandler = (event) => {
  // setPhoto({ selectedFile: event.target.files[0] })
  // }

  // const uploadHandler = () => {
  // axios.post('my-domain.com/file-upload', photo)
  // }

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
    care: care,
    photo: photo
    }
    API.createOwnedPlants(user.id , body)
    .then(() =>{
      setModal(false);
      props.getOwnedPlants();
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
            borderWidth: "0px",
           borderColor: "transparent"
          }}>Add Plant</Button>

    <Modal aria-labelledby="contained-modal-title-vcenter" centered show={modal} onHide={() => setModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
            <h5 className="modal-title" id="newPlantLabel">New Plant <i className="fas fa-pencil-alt"></i></h5>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
            <form>
              <div className="row">
                <div className="col">
                  <label htmlFor="genusLabel">Genus:</label>
                  <input className="form-input" type="text" id="newgenus" placeholder="Genus" onChange={event => setGenus(event.target.value.trim())} />
                </div>
                <div className="col">
                  <label htmlFor="speciesLabel">Species:</label>
                  <input className="form-input" type="text" id="newspecies" placeholder="Species" onChange={event => setSpecies(event.target.value.trim())} />
                </div>
                <div className="col">
                  <label htmlFor="varietyLabel">Variety:</label>
                  <input className="form-input" type="text" id="newvariety" placeholder="Variety" onChange={event => setVariety(event.target.value.trim())}/>
                </div>
                <div className="col">
                  <label htmlFor="commonNameLabel">Common Name:</label>
                  <input className="form-input" type="text" id="newcommon_name" placeholder="Common Name" onChange={event => setCommonName(event.target.value.trim())}/>
                </div>
              </div>
              <div className="row">
                <div className="col"> Water Needed:
                      <div className="form-check">
                    <input className="form-check-input" type="radio" name="newwaterNeeded" id="flexRadioDefault1" value="1" checked ={water === 1} onChange={event => {setWater(1)}} />
                    <label className="form-check-label" htmlFor="1">Low</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="newwaterNeeded" id="flexRadioDefault1" checked ={water === 2} value="2" onChange={event =>{setWater(2)}} />
                    <label className="form-check-label" htmlFor="2">Medium</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="newwaterNeeded" id="flexRadioDefault1" value="3" checked ={water === 3} onChange={event => {setWater(3)}}  />
                    <label className="form-check-label" htmlFor="3">High</label>
                  </div>
                </div>
                <div className="col"> Temperature Needed:
                      <div className="form-check">
                    <input className="form-check-input" type="radio" name="newtempNeeded" id="flexRadioDefault2" value="low" checked={temperature === 1} onChange={event => {setTemperature(1)}}/>
                    <label className="form-check-label" htmlFor="flexRadioDefault2">Low</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="newtempNeeded" id="flexRadioDefault2" value="medium" checked={temperature === 2} onChange={event => {setTemperature(2)}}/>
                    <label className="form-check-label" htmlFor="flexRadioDefault2">Medium</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="newtempNeeded" id="flexRadioDefault2" value="high" checked={temperature === 3} onChange={event => {setTemperature(3)}}/>
                    <label className="form-check-label" htmlFor="flexRadioDefault2">High</label>
                  </div>
                </div>
                <div className="col"> Humidity Needed:
                      <div className="form-check">
                    <input className="form-check-input" type="radio" name="newhumidNeeded" id="flexRadioDefault3" value="low" checked={humidity === 1} onChange={event => {setHumidity(1)}}/>
                    <label className="form-check-label" htmlFor="flexRadioDefault3">Low</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="newhumidNeeded" id="flexRadioDefault3"  value="medium" checked={humidity === 2} onChange={event => {setHumidity(2)}}/>
                    <label className="form-check-label" htmlFor="flexRadioDefault3">Medium</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="newhumidNeeded" id="flexRadioDefault3" value="high" checked={humidity === 3} onChange={event => {setHumidity(3)}}/>
                    <label className="form-check-label" htmlFor="flexRadioDefault3">High</label>
                  </div>
                </div>
                <div className="col"> Light Needed:
                      <div className="form-check">
                    <input className="form-check-input" type="radio" name="newlightNeeded" id="flexRadioDefault4" value="low" checked={light === 1} onChange={event =>{setLight(1)}}/>
                    <label className="form-check-label" htmlFor="flexRadioDefault4">Low</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="newlightNeeded" id="flexRadioDefault4" value="medium" checked={light === 2} onChange={event =>{setLight(2)}}/>
                    <label className="form-check-label" htmlFor="flexRadioDefault4">Medium</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="newlightNeeded" id="flexRadioDefault4" value="high" checked={light ===3} onChange={event =>{setLight(3)}}/>
                    <label className="form-check-label" htmlFor="flexRadioDefault4">High</label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <label htmlFor="description">Description:</label>
                  <textarea className="form-control" name="description" id="newdescription" row="5" cols="40" defaultValue="Describe the plant here" onChange={event => setDescription(event.target.value.trim())}></textarea>
                </div>
                <div className="col-12">
                  <label htmlFor="care">Care:</label>
                  <textarea className="form-control" name="care" id="newcare" row="5" cols="40" defaultValue="Place your notes on proper care here" onChange={event => setCare(event.target.value.trim())}></textarea>
                </div>
              </div>
              <div className="row">
              {/* <Form>
                <Form.Group>
                  <Form.File id="formControlFile1" label="Upload a Photo" onChange={fileHandler}/>
                  <Button onClick={uploadHandler}></Button>
                </Form.Group>
              </Form> */}
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