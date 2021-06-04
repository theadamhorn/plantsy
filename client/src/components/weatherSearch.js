import React, {useState} from 'react';
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import getWeather from "../utils/weather";
import { Col, Row } from 'react-bootstrap';

function WeatherSearch (props) {

    const [search, setSearch] = useState();


return(
    <>
<Form >
    <Form.Row className="align-items-center weatherSearch">
        <Col sm={8} md={8} lg={8}>
            <FormControl type="text" style={{marginLeft: "-5px"}} placeholder="Search" className="mr-sm-2" onChange={event =>setSearch(event.target.value.trim())}/>
        </Col>
            <Button variant="outline-success" onClick={()=>getWeather(search)}>Search</Button>
    </Form.Row>
</Form>
</>
)
}

export default WeatherSearch;