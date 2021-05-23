import React from 'react'

function PlantModal(props) {

    return (
        <div className="modal fade" id={"plantModal" + props.id} data-bs-backdrop="false"
            data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel"
            aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content plant_profile">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">{props.genus}
                            {props.species} {props.variety} | {props.common_name}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col">
                                <img className="plantPhoto" src={props.photo} />
                            </div>
                        </div>
                        \n
                        <div className="row">
                            <div className="col-md-3 text-start">
                                <h5>Water:</h5>{props.watering}
                            </div>
                            <div className="col-md-3 text-start">
                                <h5>Temperature:</h5>{props.temperature}
                            </div>
                            <div className="col-md-3 text-start">
                                <h5>Humidity:</h5>{props.humidity}
                            </div>
                            <div className="col-md-3 text-start">
                                <h5>Light:</h5>{props.light}
                            </div>
                        </div>
                        \n
                        <div className="row">
                            <div className="col-md-6 text-start">
                                <h5>Description:</h5>{props.description}
                            </div>
                            <div className="col-md-6 text-start">
                                <h5>Care:</h5>{props.care}
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary"
                            data-bs-dismiss="modal">Close</button>
                        <button className="btn add-plant-button" type="button" value={props.id}>Add Plant</button>
                        {/* <ModalButton/> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlantModal;