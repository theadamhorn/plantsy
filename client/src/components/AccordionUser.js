import React,{ useState, useEffect } from 'react'
import PlantModal from "./ModalPlant";
import PlantBadge from "./PlantBadge";
import { useSpring, animated } from 'react-spring';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSeedling } from '@fortawesome/free-solid-svg-icons'

function AccordionUser(props) {
    var [Gardener, setGardener] = useState(false);


    useEffect(() => {
        var location = document.location.pathname;
        if (location === '/gardeners') {
            setGardener(true);
        }
    }, [props])

    var ownedPlants = props.ownedPlants;

    const styles = useSpring({
        delay: 200,
        to: async (next, cancel) => {
          await next({ opacity: 1 })
          
        },
        from: { opacity: 0 },
      })

if(Gardener === true){
    return (
        
        <div className="accordion">
            {ownedPlants && ownedPlants.map(plant => {
                return (
                    
                    <div className="accordion-item" key={plant.id}>
                        <h2 className="accordion-header" id={"heading" + plant.id}>
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse" + plant.id} aria-expanded="true" aria-controls={"collapse" + plant.id}>
                                {plant.genus} {plant.species} --- {plant.common_name}

                            </button>
                        </h2>
                        <div id={"collapse" + plant.id} className="accordion-collapse collapse" aria-labelledby={"heading" + plant.id} data-bs-parent={"#heading" + plant.id}>
                            <div className="accordion-body">
                                <div className="row justify-content-evenly">
                                    
                                    <div className="modal-body" style={{lineHeight: "1em"}}>
                                    <div className="row">
                                        <div className="col">
                                            <img className="plantPhoto" src={plant.photo} alt={plant.common_name} />
                                        </div>
                                    </div>
                                   <br/>
                                    <div className="row">
                                        <div className="col-auto text-start">
                                            <h5>Water:</h5>{plant.watering}
                                        </div>
                                        <div className="col-auto text-start">
                                            <h5>Temperature:</h5>{plant.temperature}
                                        </div>
                                        <div className="col-auto text-start">
                                            <h5>Humidity:</h5>{plant.humidity}
                                        </div>
                                        <div className="col-auto text-start">
                                            <h5>Light:</h5>{plant.light}
                                        </div>
                                    </div>
                                    <br/>
                                    <div className="row">
                                        {plant.care ?
                                        <div className="col-md-6 text-start">
                                            <h5>Description:</h5>{plant.description}
                                        </div>
                                        :
                                        <div className="text-start">
                                            <h5>Description:</h5>{plant.description}
                                        </div>
                                        }
                                        {plant.care ? <div className="col-md-6 text-start">
                                            <h5>Care:</h5>{plant.care}
                                        </div> : ""
                                        }
                                    </div>
                                </div> 
                                    
                                    <div className="col-auto plant">
                                   
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    
    )
        }
    else if (Gardener === false){
        return (
            
            <animated.div className="accordion" style={styles}>
                {ownedPlants && ownedPlants.map(plant => {
                    return (
                        
                        <div className="accordion-item" key={plant.id}>
                            <h2 className="accordion-header" id={"heading" + plant.id}>
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse" + plant.id} aria-expanded="true" aria-controls={"collapse" + plant.id}>
                                    {plant.genus} {plant.species} --- {plant.common_name}
    
                                </button>
                            </h2>
                            <div id={"collapse" + plant.id} className="accordion-collapse collapse" aria-labelledby={"heading" + plant.id} data-bs-parent={"#heading" + plant.id}>
                                <div className="accordion-body">
                                    <div className="row justify-content-evenly">
                                        
                                            <>
                                        <PlantBadge
                                            watering={plant.watering}
                                            temperature={plant.temperature}
                                            humidity={plant.humidity}
                                            light={plant.light}
                                        />
                                        </>
                                        <>
                                        <PlantModal
                                            id={plant.id}
                                            genus={plant.genus}
                                            species={plant.species}
                                            variety={plant.variety}
                                            common_name={plant.common_name}
                                            photo={plant.photo}
                                            watering={plant.watering}
                                            temperature={plant.temperature}
                                            humidity={plant.humidity}
                                            light={plant.light}
                                            description={plant.description}
                                            care={plant.care}
                                            getOwnedPlants= {props.getOwnedPlants}
                                            />
                                        </>    
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </animated.div>
        )

    }
        
}

export default AccordionUser
