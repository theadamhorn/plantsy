import React from 'react';
import Accordion from './Accordion';
import { Row, Col } from "react-bootstrap";

function BenchContainer(props) {

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
                            posts={props.posts}
                        // comments={props.comments}
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