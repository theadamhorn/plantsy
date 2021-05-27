import React, { useEffect, useState } from 'react';
import PlantModal from "./ModalPlant";
import TrellisModal from "./ModalTrellis";
// import ModalButton from "./ModalButton";
import PlantBadge from "./PlantBadge";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSeedling } from '@fortawesome/free-solid-svg-icons'


export default function Accordion(props) {
    var [Gardener, setGardener] = useState(false);
    var [Plant, setPlant] = useState(false);
    var [OwnedPlant, setOwnedPlant] = useState(false);
    var [Trellis, setTrellis] = useState(false);

    useEffect(() => {
        var location = document.location.pathname;

        if (location === '/plants') {
            setPlant(true);
        }
        if (location === '/gardeners') {
            setGardener(true)
        }
        if (location === '/profile') {
            setOwnedPlant(true)
        }
        if (location === '/trellis') {
            setTrellis(true)
        }

    }, [props])


    var plants = props.plants;
    var users = props.users;
    var posts = props.trellis_posts;


    if (Plant === true && plants === undefined) {
        plants = [{
            plant: "Spider",
            genus: "Thug",
            species: "Monster",
            id: 12345,
            commonName: "Lovey Dovey"
        }, {
            plant: "Burkin",
            genus: "Pretty",
            species: "Princess",
            id: 12346,
            commonName: "superDuper"
        }]
    }
    if (Gardener === true && users === undefined) {
        users = [{
            name: "Bobby",
            id: 7775
        }, {
            name: "Mark",
            id: 7777
        }]
    }


    console.log(props);
    if (Plant === true) {
        return (
            <div>
                <div className="accordion">
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
                                            <PlantBadge
                                                watering={plant.watering}
                                                temperature={plant.temperature}
                                                humidity={plant.humidity}
                                                light={plant.light}
                                            />
                                            <div className="col-auto plant">
                                                <button type="button" className="plant_button" data-bs-toggle="modal" data-bs-target={"#plantModal" + plant.id}>
                                                    <p><FontAwesomeIcon icon={faSeedling} className="fa-2x" /></p>
                                                    <p>Plant</p>
                                                    <p>Profile</p>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>)
    }

    else if (Gardener === true) {
        return (
            <div>
                <div className="accordion">
                    {users.map(user => {
                        return (
                            <div className="accordion-item" key={user._id}>
                                <h2 className="accordion-header" id={"heading" + user._id}>
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse" + user._id} aria-expanded="true" aria-controls={"collapse" + user._id}>
                                        {user.name}

                                    </button>
                                </h2>
                                <div id={"collapse" + user._id} className="accordion-collapse collapse" aria-labelledby={"heading" + user._id} data-bs-parent={"#heading" + user._id}>
                                    <div className="accordion-body">
                                        A users garden button will go here.
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>)
    }

    else if (Trellis === true) {
        return (
            <div>
                <div className="accordion">
                    {posts.map(posts => {
                        return (
                            <div className="accordion-item" key={posts.id}>
                                <h2 className="accordion-header" id={"heading" + posts.id}>
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse" + posts.id} aria-expanded="true" aria-controls={"collapse" + posts.id}>
                                        {posts.title}
                                    </button>
                                </h2>
                                <div id={"collapse" + posts.id} className="accordion-collapse collapse" aria-labelledby={"heading" + posts.id} data-bs-parent={"#heading" + posts.id}>
                                    <div className="accordion-body">
                                        <div className="row justify-content-evenly">
                                            <TrellisModal
                                                id={posts.id}
                                                title={posts.title}
                                                body={posts.body}
                                            />
                                            <div className="col-auto plant">
                                                <button type="button" className="plant_button" data-bs-toggle="modal" data-bs-target={"#plantModal" + plant.id}>
                                                    <p><FontAwesomeIcon icon={faSeedling} className="fa-2x" /></p>
                                                    <p>Plant</p>
                                                    <p>Profile</p>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>)
    }

    else return (<h1 className="mx-3">No information to display</h1>)


}


