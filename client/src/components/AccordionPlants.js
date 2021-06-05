import React from 'react'
import PlantModal from "./ModalPlant";
import PlantBadge from "./PlantBadge";
import { useSpring, animated } from 'react-spring';


function AccordionPlants(props) {

    const styles = useSpring({
        delay: 200,
        to: async (next, cancel) => {
          await next({ opacity: 1 })
          
        },
        from: { opacity: 0 },
      })

    var plants = props.plants;
    return (
        <div className="trellis-posts-holder-user">
            <animated.div className="accordion" style={styles}>
                {plants.map(plant => {
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
                                        <PlantBadge
                                            watering={plant.watering}
                                            temperature={plant.temperature}
                                            humidity={plant.humidity}
                                            light={plant.light}
                                        />
                                        <div className="col-auto plant">
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
                                        />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </animated.div>
            {/* end of AccordionPlants */}
        </div>)

}


export default AccordionPlants
