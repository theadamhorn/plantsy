import React from 'react'

function DeletePlantModal (props) { 
    return(
        <div class="modal fade" id="staticBackdrop{garden.id}" data-bs-backdrop="false" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content plant_profile"> 
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">{props.name}'s Garden </h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <Accordion/>
                </div>
            </div>
        </div>
    </div>  
    );
}

export default DeletePlantModal;