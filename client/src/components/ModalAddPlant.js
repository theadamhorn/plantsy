import React from 'react'

function AddPlantModal(props) {

  return (
    <div className="modal fade" id="newPlant" data-bs-backdrop="false" data-bs-keyboard="false" tabindex="-1" aria-labelledby="newPlantLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content newPlant">
          <div className="modal-header">
            <h5 className="modal-title" id="newPlantLabel">New Plant <i className="fas fa-pencil-alt"></i></h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="row new_plant_1">
                <div className="col">
                  <label for="genusLabel">Genus:</label>
                  <input className="form-input" type="text" id="newgenus" placeholder="Genus" />
                </div>
                <div className="col">
                  <label for="speciesLabel">Species:</label>
                  <input className="form-input" type="text" id="newspecies" placeholder="Species" />
                </div>
                <div className="col">
                  <label for="varietyLabel">Variety:</label>
                  <input className="form-input" type="text" id="newvariety" placeholder="Variety" />
                </div>
                <div className="col">
                  <label for="commonNameLabel">Common Name:</label>
                  <input className="form-input" type="text" id="newcommon_name" placeholder="Common Name" />
                </div>
              </div>
              <div className="row plant_edit_2">
                <div className="col"> Water Needed:
                      <div className="form-check">
                    <input className="form-check-input" type="radio" name="newwaterNeeded" id="flexRadioDefault1" value="low" />
                    <label className="form-check-label" for="low">Low</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="newwaterNeeded" id="flexRadioDefault1" value="medium" checked />
                    <label className="form-check-label" for="medium">Medium</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="newwaterNeeded" id="flexRadioDefault1" value="High" />
                    <label className="form-check-label" for="high">High</label>
                  </div>
                </div>
                <div className="col"> Temperature Needed:
                      <div className="form-check">
                    <input className="form-check-input" type="radio" name="newtempNeeded" id="flexRadioDefault2" value="low" />
                    <label className="form-check-label" for="flexRadioDefault2">Low</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="newtempNeeded" id="flexRadioDefault2" value="medium" checked />
                    <label className="form-check-label" for="flexRadioDefault2">Medium</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="newtempNeeded" id="flexRadioDefault2" value="high" />
                    <label className="form-check-label" for="flexRadioDefault2">High</label>
                  </div>
                </div>
                <div className="col"> Humidity Needed:
                      <div className="form-check">
                    <input className="form-check-input" type="radio" name="newhumidNeeded" id="flexRadioDefault3" value="low" />
                    <label className="form-check-label" for="flexRadioDefault3">Low</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="newhumidNeeded" id="flexRadioDefault3" value="medium" checked />
                    <label className="form-check-label" for="flexRadioDefault3">Medium</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="newhumidNeeded" id="flexRadioDefault3" value="high" />
                    <label className="form-check-label" for="flexRadioDefault3">High</label>
                  </div>
                </div>
                <div className="col"> Light Needed:
                      <div className="form-check">
                    <input className="form-check-input" type="radio" name="newlightNeeded" id="flexRadioDefault4" value="low" />
                    <label className="form-check-label" for="flexRadioDefault4">Low</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="newlightNeeded" id="flexRadioDefault4" value="medium" checked />
                    <label className="form-check-label" for="flexRadioDefault4">Medium</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="newlightNeeded" id="flexRadioDefault4" value="high" />
                    <label className="form-check-label" for="flexRadioDefault4">High</label>
                  </div>
                </div>
              </div>
              <div className="row plant_edit_3">
                <div className="col-12">
                  <label for="description">Description:</label>
                  <textarea name="description" id="newdescription" row="5" cols="40">Describe the plant here</textarea>
                </div>
                <div className="col-12">
                  <label for="care">Care:</label>
                  <textarea name="care" id="newcare" row="5" cols="40">Place your notes on proper care here</textarea>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" id="newPlantSave" className="btn btn-danger">Add to Collection</button>
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddPlantModal;