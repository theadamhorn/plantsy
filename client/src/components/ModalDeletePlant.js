import React from 'react'

function DeletePlantModal (props) { 
    
        return(
            <div class="modal fade" id="deletePlant" data-bs-backdrop="false" data-bs-keyboard="false" tabindex="-1" aria-labelledby="deletePlantLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content deletePlant">
                <div class="modal-header">
                  <h5 class="modal-title" id="deletePlantLabel">Delete Plant(s)</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  {props.Owned_Plants.map(plant => {
                  <div class="row">
                   <h5>{plant.common_name}<button type="button" class="btn-close deletePlantBtn" id="deletePlantBtn" value="{plant.id}" aria-label="Close"></button></h5>
                  </div>
                  })}
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
        );
         }

export default DeletePlantModal;