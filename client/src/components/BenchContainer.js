import React from 'react';
import Accordion from './Accordion';
import { Row, Col } from "react-bootstrap";

function BenchContainer(props) {

    return (
        <>
            <main className="container-fluid px-0">
                <div className="potting navbar justify-content-around">
                    <span> </span>
                    <span className="bench ">
                        {props.title}
                    </span>
                    <span>{props.addPlant}</span>
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