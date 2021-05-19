import React from 'react'

function PlantModal (props) { 
    
        return(
            <div class="modal fade" id={"plantModal" + props.id} data-bs-backdrop="false"
            data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel"
            aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content plant_profile">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">{props.genus}
                            {props.species} {props.variety} | {props.common_name}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col">
                                <img class="plantPhoto" src={props.photo} />
                            </div>
                        </div>
                        \n
                        <div class="row">
                            <div class="col-md-3 text-start">
                                <h5>Water:</h5>{props.watering}
                            </div>
                            <div class="col-md-3 text-start">
                                <h5>Temperature:</h5>{props.temperature}
                            </div>
                            <div class="col-md-3 text-start">
                                <h5>Humidity:</h5>{props.humidity}
                            </div>
                            <div class="col-md-3 text-start">
                                <h5>Light:</h5>{props.light}
                            </div>
                        </div>
                        \n
                        <div class="row">
                            <div class="col-md-6 text-start">
                                <h5>Description:</h5>{props.description}
                            </div>
                            <div class="col-md-6 text-start">
                                <h5>Care:</h5>{props.care}
                            </div>
                        </div>
                    </div>
                        <div class="modal-footer">
                        <button type="button" class="btn btn-secondary"
                            data-bs-dismiss="modal">Close</button>
                        <button class="btn add-plant-button" type="button" value={props.id}>Add Plant</button>
                            <ModalButton/>
                        </div>
                    </div>
                </div>
                </div>
        );
         }

export default PlantModal;