import React, { useState, useEffect } from 'react';
// import API from '../utils/API';
// import Accordion from './Accordion';
// import Model from './Modal';
import { Navbar, Container, Row, Col } from "react-bootstrap";

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



    return (
        <>
            <Container className="row">
                <Navbar className="potting justify-content-around">
                    <span className="bench">{plants ? `The Nursery` : ``}
                        {gardeners ? `The Potting Bench` : ``}
                        {profile ? `${props.user.id}'s Potting Bench` : ``}
                        {trellis ? `The Trellis` : ``}</span>
                </Navbar>
                <Row>
                    {/* <Col xs={12} md={4}>{Accordion}</Col> */}
                    <Col xs={12} md={8}></Col>
                </Row>


            </Container>

        </>
    )
}

export default BenchContainer;