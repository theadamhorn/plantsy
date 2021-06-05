import React from 'react';
import Accordion from './Accordion';
import { Row, Col } from "react-bootstrap";
import { useSpring, animated } from 'react-spring';
import WeatherSearch from './weatherSearch';


function BenchContainer(props) {

    const styles = useSpring({
        delay: 200,
        to: async (next, cancel) => {
          await next({ opacity: 1 })
          
        },
        from: { opacity: 0 },
      })

    
    return (
        <>
            <main className="container-fluid px-0">
                <div className="potting navbar justify-content-around">
                    <animated.span style={styles}>
                    { document.location.pathname === "/profile" ? <WeatherSearch/> :''}
                    </animated.span>
                    <animated.span className="bench" style={styles}>
                        {props.title}
                    </animated.span>
                    <animated.span style={styles}>
                    { document.location.pathname === "/profile" ?<>{props.addPlant}{props.deletePlant}</> :''}
                    </animated.span>
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