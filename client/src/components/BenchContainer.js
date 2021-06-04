import React from 'react';
import Accordion from './Accordion';
import { Row, Col } from "react-bootstrap";
import WeatherSearch from './weatherSearch';
function BenchContainer(props) {
    
    return (
        <>
            <main className="container-fluid px-0">
                <div className="potting navbar justify-content-around">
                    <span>
                    { document.location.pathname === "/profile" ? <WeatherSearch/> :''}
                    </span>
                    <span className="bench">
                        {props.title}
                    </span>
                    <span>
                    { document.location.pathname === "/profile" ?<>{props.addPlant}{props.deletePlant}</> :''}
                    </span>
                </div>
                <Row className="gx-0">
                    <Col xs={12} md={4} lg={4} className="accordionHolder">
                        <Accordion
                            plants={props.plants}
                            gardeners={props.gardeners}
                            OwnedPlants={props.OwnedPlants}
                            getOwnedPlants= {props.getOwnedPlants}
                        />
                    </Col>
                    <Col className="trellis">

                    </Col>
                </Row>
            </main>
        </>
    )
}

export default BenchContainer;