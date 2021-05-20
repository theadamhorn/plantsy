import React from 'react'

function AddPlantModal (props) { 
    
        return(
            <div class="modal fade" id="newPlant" data-bs-backdrop="false" data-bs-keyboard="false" tabindex="-1" aria-labelledby="newPlantLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content newPlant">
                <div class="modal-header">
                  <h5 class="modal-title" id="newPlantLabel">New Plant <i class="fas fa-pencil-alt"></i></h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <form>
                  <div class="row new_plant_1">
                    <div class="col">
                      <label for="genusLabel">Genus:</label>
                      <input class="form-input" type="text" id="newgenus" placeholder="Genus"/>
                    </div>
                    <div class="col">
                      <label for="speciesLabel">Species:</label>
                      <input class="form-input" type="text" id="newspecies" placeholder="Species"/>
                    </div>
                    <div class="col">
                      <label for="varietyLabel">Variety:</label>
                      <input class="form-input" type="text" id="newvariety" placeholder="Variety"/>
                    </div>
                    <div class="col">
                      <label for="commonNameLabel">Common Name:</label>
                      <input class="form-input" type="text" id="newcommon_name" placeholder="Common Name"/>
                    </div>
                  </div>
                  <div class="row plant_edit_2">
                    <div class="col"> Water Needed:
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="newwaterNeeded" id="flexRadioDefault1" value="low"/>
                        <label class="form-check-label" for="low">Low</label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="newwaterNeeded" id="flexRadioDefault1" value="medium" checked/>
                        <label class="form-check-label" for="medium">Medium</label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="newwaterNeeded" id="flexRadioDefault1" value="High"/>
                        <label class="form-check-label" for="high">High</label>
                      </div>
                    </div>
                    <div class="col"> Temperature Needed:
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="newtempNeeded" id="flexRadioDefault2" value="low"/>
                        <label class="form-check-label" for="flexRadioDefault2">Low</label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="newtempNeeded" id="flexRadioDefault2" value="medium" checked/>
                        <label class="form-check-label" for="flexRadioDefault2">Medium</label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="newtempNeeded" id="flexRadioDefault2" value="high"/>
                        <label class="form-check-label" for="flexRadioDefault2">High</label>
                      </div>
                    </div>
                    <div class="col"> Humidity Needed:
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="newhumidNeeded" id="flexRadioDefault3" value="low"/>
                        <label class="form-check-label" for="flexRadioDefault3">Low</label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="newhumidNeeded" id="flexRadioDefault3" value="medium" checked/>
                        <label class="form-check-label" for="flexRadioDefault3">Medium</label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="newhumidNeeded" id="flexRadioDefault3" value="high"/>
                        <label class="form-check-label" for="flexRadioDefault3">High</label>
                      </div>
                    </div>
                    <div class="col"> Light Needed:
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="newlightNeeded" id="flexRadioDefault4" value="low"/>
                        <label class="form-check-label" for="flexRadioDefault4">Low</label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="newlightNeeded" id="flexRadioDefault4" value="medium" checked/>
                        <label class="form-check-label" for="flexRadioDefault4">Medium</label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="newlightNeeded" id="flexRadioDefault4" value="high"/>
                        <label class="form-check-label" for="flexRadioDefault4">High</label>
                      </div>
                    </div>
                  </div>
                  <div class="row plant_edit_3">
                    <div class="col-12">
                      <label for="description">Description:</label>
                      <textarea name="description" id="newdescription" row="5" cols="40">Describe the plant here</textarea>
                    </div>
                    <div class="col-12">
                      <label for="care">Care:</label>
                      <textarea name="care" id="newcare" row="5" cols="40">Place your notes on proper care here</textarea>
                    </div>
                  </div>
                <div class="modal-footer">
                  <button type="button" id="newPlantSave" class="btn btn-danger">Add to Collection</button>
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
                </form>
                </div>
              </div>
            </div>
          </div>
        );
        }

export default AddPlantModal;