import React from 'react'

function DeletePlantModal(props) {

  return (
    <div className="modal fade" id="deletePlant" data-bs-backdrop="false" data-bs-keyboard="false" tabindex="-1" aria-labelledby="deletePlantLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content deletePlant">
          <div className="modal-header">
            <h5 className="modal-title" id="deletePlantLabel">Delete Plant(s)</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            {props.Owned_Plants.map(plant => {
              <div className="row">
                <h5>{plant.common_name}<button type="button" className="btn-close deletePlantBtn" id="deletePlantBtn" value="{plant.id}" aria-label="Close"></button></h5>
              </div>
            })}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeletePlantModal;