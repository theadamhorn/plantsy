import React from 'react';
// import Modal from "./Modal";

export default function Accordion(props) {
    const plants = props
    const plantHead = <> {plant.genus} {plant.species}{plant.variety} --- {plant.common_name} </>
    

    return (
        <div>
            {plants.map(plant => {
            <div class="accordion">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="heading{plant.id}">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse{plant.id}" aria-expanded="true" aria-controls="collapse{plant.id}">
                        {plantHead}
                    </button>
                    </h2>
                 <div id="collapse{plant.id}" class="accordion-collapse collapse" aria-labelledby="heading{plant.id}" data-bs-parent="#heading{plant.id}">
                    <div class="accordion-body">
                    {/* <ModalButton plantID={plant.id}/>   
                    <Modal 
                    genus={plant.genus}
                    species={plant.species}
                    variety={plant.variety}
                    commonName={plant.common_name}
                    photo={plant.photo}
                    watering={plant.watering}
                    temperature={plant.temperature}
                    humdity={plant.humdity}
                    light={plant.light}
                    description={plant.description}
                    care={plant.care}
                    /> */}

                </div>
             </div>
        </div>
        </div>     
    })}
   </div>)
}
