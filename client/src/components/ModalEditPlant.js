import React from "react";

function EditPlantModal (props){
    return(
        <main class="modal fade" id="modal2{props.id}" data-bs-backdrop="false" data-bs-keyboard="true" aria-hidden="true" aria-labelledby="model2{props.id}Label" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content edit_plant_profile">
                    <header class="modal-header">
                        <h5 class="modal-title" id="modal2{props.id}Label">Editor <i class="fas fa-pencil-alt"></i>... {props.genus} {props.species} {props.variety}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </header>
                    <details class="modal-body">
                        <form>
                            <section class="row plant_edit_1">
                                <div id="plantID">
                                    {props.id}
                                </div>
                                <div class="col">
                                    <label for="genusLabel">Genus:</label>
                                    <input class="form-input" type="text" id="genus" value={props.genus}/>
                                </div>
                                <div class="col">
                                    <label for="speciesLabel">Species:</label>
                                    <input class="form-input" type="text" id="species" value={props.species}/>
                                </div>
                                <div class="col">
                                    <label for="varietyLabel">Variety:</label>
                                    <input class="form-input" type="text" id="variety" value={props.variety}/>
                                </div>
                                <div class="col">
                                    <label for="commonNameLabel">Common Name:</label>
                                    <input class="form-input" type="text" id="common_name" value={props.common_name}/>
                                </div>
                            </section>
                            <section class="row plant_edit_2">
                                <article class="col"> Water Needed: 
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="waterNeeded" id="flexRadioDefault1" value="low"/>
                                        <label class="form-check-label" for="low">Low</label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="waterNeeded" id="flexRadioDefault1" value="medium" checked/>
                                        <label class="form-check-label" for="medium">Medium</label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="waterNeeded" id="flexRadioDefault1" value="High"/>
                                        <label class="form-check-label" for="high">High</label>
                                    </div>
                                </article>
                                <article class="col"> Temperature Needed: 
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="tempNeeded" id="flexRadioDefault2" value="low"/>
                                        <label class="form-check-label" for="flexRadioDefault2">Low</label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="tempNeeded" id="flexRadioDefault2" value="medium" checked/>
                                        <label class="form-check-label" for="flexRadioDefault2">Medium</label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="tempNeeded" id="flexRadioDefault2" value="high"/>
                                        <label class="form-check-label" for="flexRadioDefault2">High</label>
                                    </div>
                                </article>
                                <article class="col"> Humidity Needed: 
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="humidNeeded" id="flexRadioDefault3" value="low"/>
                                        <label class="form-check-label" for="flexRadioDefault3">Low</label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="humidNeeded" id="flexRadioDefault3" value="medium" checked/>
                                        <label class="form-check-label" for="flexRadioDefault3">Medium</label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="humidNeeded" id="flexRadioDefault3" value="high"/>
                                        <label class="form-check-label" for="flexRadioDefault3">High</label>
                                    </div>
                                </article>
                                <article class="col"> Light Needed: 
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="lightNeeded" id="flexRadioDefault4" value="low"/>
                                        <label class="form-check-label" for="flexRadioDefault4">Low</label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="lightNeeded" id="flexRadioDefault4" value="medium" checked/>
                                        <label class="form-check-label" for="flexRadioDefault4">Medium</label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="lightNeeded" id="flexRadioDefault4" value="high"/>
                                        <label class="form-check-label" for="flexRadioDefault4">High</label>
                                    </div>
                                </article>
                            </section>
                            <section class="row plant_edit_3">
                                <div class="col-12">
                                    <label for="description">Description:</label>
                                    <textarea name="description" id="description" row="5" cols="40">{props.description}</textarea>
                                </div>
                                <div class="col-12">
                                    <label for="care">Care:</label>
                                    <textarea name="care" id="care" row="5" cols="40">{props.care}</textarea>
                                </div>
                            </section>
                            <footer class="modal-footer">
                                <button type="submit" id="saveEdit" value="submit" class="btn btn-danger">Save</button>   
                            </footer>
                        </form>
                    </details>
                </div>
            </div>
        </main>
    );
}

export default EditPlantModal;