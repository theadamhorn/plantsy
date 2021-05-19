import React from 'react'

function ModalButton(props) {
    return (
        <div>
            <button type="button" class="plant_button" data-bs-toggle="modal" data-bs-target="#staticBackdrop{{garden.id}}">
                <p>
                <i class="fas fa-seedling fa-2x"></i>
                </p>
                <p>View</p>
                <p>Garden</p>
            </button>
        </div>
    )
}
/*


<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse{{garden.id}}" aria-expanded="true" aria-controls="collapse{{garden.id}}">
                {{garden.name}}
            </button>
*/
export default ModalButton;
