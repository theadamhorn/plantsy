import React, { useState, useEffect } from 'react';
import API from '../utils/API';
import Accordion from './Accordion';
// import Model from './Modal';
import { Row, Col } from "react-bootstrap";

function BenchContainer(props) {
    const [plants, setPlants] = useState(false)
    const [gardeners, setGardeners] = useState(false)
    const [profile, setProfile] = useState(false)
    const [trellis, setTrellis] = useState(false)
    // var plant = props.plant;


    useEffect(() => {
        var location = document.location.pathname;

        if (location === '/plants') {
            setPlants(true)

            // API call depending on the page, set results into hook, then pass hook into {Accordion}
        }
        if (location === '/gardeners') {
            setGardeners(true)
        }
        if (location === '/profile') {
            setProfile(true)
        }
        if (location === '/trellis') {
            setTrellis(true)
        }

    }, [])

// This var is only for demo purposes in place of an API Call
var passedProp =[{
    plant: "Spider",
    genus: "Thug",
    species: "Monster",
    id: 12345,
    commonName: "Lovey Dovey"
},{
    plant: "Burkin",
    genus: "Pretty",
    species: "Princess",
    id: 12346,
    commonName: "superDuper"
}]

    return (
        <>
            <main className="container-fluid">
                <div className="potting navbar justify-content-around">
                    <span className="bench">{plants ? `The Nursery` : ``}
                        {gardeners ? `The Potting Bench` : ``}
                        {profile ? `${props.user.id}'s Potting Bench` : ``}
                        {trellis ? `The Trellis` : ``}</span>
                </div>
                <Row>
                    <Col xs={12} md={4}>
                        <Accordion 
                     plants={passedProp}
                    />
                    </Col>
                    <Col xs={12} md={8} className="trelis">

                    </Col>
                </Row>


            </main>

        </>
    )
}

export default BenchContainer;