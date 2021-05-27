import React, { useState, useEffect } from 'react';
import API from '../utils/API';
import Accordion from './Accordion';
// import Model from './Modal';
import { Row, Col } from "react-bootstrap";

function BenchContainer(props) {
    // Set state specific to the page route
    const [plants, setPlants] = useState(false)
    const [gardeners, setGardeners] = useState(false)
    const [profile, setProfile] = useState(false)
    const [trellis, setTrellis] = useState(false)

    // Set state specific to the data needed for the accordion
    const [plantData, setPlantData] = useState([])
    const [gardenerData, setGardenerData] = useState([])
    const [ownedPlantData, setOwnedPlantData] = useState([])
    const [trellisPostsData, setTrellisPostsData] = useState([])

    // var gardenerData = ""; << why do we need this??


    useEffect(() => {
        var location = document.location.pathname;

        if (location === '/plants') {
            setPlants(true)

            // API call depending on the page, set results into hook, then pass hook into {Accordion}
            API.getPlants()
                .then(res => {
                    setPlantData(res.data)
                    setGardenerData([])
                    setOwnedPlantData([])
                    setTrellisPostsData([])
                })
                .catch(err => console.log(err));

        }
        if (location === '/gardeners') {
            setGardeners(true)

            API.getUsers()
                .then(res => {
                    setPlantData([])
                    setGardenerData(res.data)
                    setOwnedPlantData([])
                    setTrellisPostsData([])
                })
                .catch(err => console.log(err));
        }
        if (location === '/users') {
            setProfile(true)

            API.getOwnedPlants()
                .then(res => {
                    setOwnedPlantData(res.data)
                    setGardenerData([])
                    setPlantData([])
                    setTrellisPostsData([])
                })
                .catch(err => console.log(err));

        }
        if (location === '/trellis') {
            setTrellis(true)

            API.getOwnedPlants()
                .then(res => {
                    setOwnedPlantData([])
                    setGardenerData([])
                    setPlantData([])
                    setTrellisPostsData(res.data)
                })
                .catch(err => console.log(err));

        }

    }, [])

    console.log(plants)

    return (
        <>
            <main className="container-fluid px-0">
                <div className="potting navbar justify-content-around">
                    <span className="bench">
                        {props.title}
                    </span>
                </div>
                <Row>
                    <Col xs={12} md={4} className="p-0">
                        <Accordion
                            plants={props.plants}
                            gardeners={props.gardeners}
                            OwnedPlants={props.OwnedPlants}
                        />
                    </Col>
                    <Col xs={12} md={8} className="trellis">

                    </Col>
                </Row>


            </main>
        </>
    )
}

export default BenchContainer;