import React from 'react'

function DeletePlantModal(props) {
    return (
        <div className="modal fade" id="staticBackdrop{garden.id}" data-bs-backdrop="false" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content plant_profile">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">{props.name}'s Garden </h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <Accordion />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DeletePlantModal;