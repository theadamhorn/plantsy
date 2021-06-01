import React from "react";
import API from "../utils/API";
import UserContext from "../utils/UserContext";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function EditPlantModal(props) {
    const [modal, setModal] = useState(false);

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
    API.createOwnedPlants(user.id , body)
    .then(res =>{
      history.push("/profile");
    })
    .catch(err => { console.error(err) })
  }
    
    return (
        <main className="modal fade" id="modal2{props.id}" data-bs-backdrop="false" data-bs-keyboard="true" aria-hidden="true" aria-labelledby="model2{props.id}Label" tabindex="-1">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content edit_plant_profile">
                    <header className="modal-header">
                        <h5 className="modal-title" id="modal2{props.id}Label">Editor <i className="fas fa-pencil-alt"></i>... {props.genus} {props.species} {props.variety}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </header>
                    <details className="modal-body">
                        <form>
                            <section className="row plant_edit_1">
                                <div id="plantID">
                                    {props.id}
                                </div>
                                <div className="col">
                                    <label for="genusLabel">Genus:</label>
                                    <input className="form-input" type="text" id="genus" value={props.genus} />
                                </div>
                                <div className="col">
                                    <label for="speciesLabel">Species:</label>
                                    <input className="form-input" type="text" id="species" value={props.species} />
                                </div>
                                <div className="col">
                                    <label for="varietyLabel">Variety:</label>
                                    <input className="form-input" type="text" id="variety" value={props.variety} />
                                </div>
                                <div className="col">
                                    <label for="commonNameLabel">Common Name:</label>
                                    <input className="form-input" type="text" id="common_name" value={props.common_name} />
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
                                    <textarea name="description" id="description" row="5" cols="40">{props.description}</textarea>
                                </div>
                                <div className="col-12">
                                    <label for="care">Care:</label>
                                    <textarea name="care" id="care" row="5" cols="40">{props.care}</textarea>
                                </div>
                            </section>
                            <footer className="modal-footer">
                                <button type="submit" id="saveEdit" value="submit" className="btn btn-danger">Save</button>
                            </footer>
                        </form>
                    </details>
                </div>
            </div>
        </main>
    );
}

export default EditPlantModal;