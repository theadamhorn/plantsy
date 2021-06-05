import React, {useState} from 'react';
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import WeatherComponents from './WeatherComponents';
import { Col, Row } from 'react-bootstrap';

function WeatherSearch (props) {

    const [search, setSearch] = useState();

    const [weatherData, setWeatherData] = useState(null);

    const getWeather =async (event ,search)=>{
        event.preventDefault();
            fetch("https://api.openweathermap.org/data/2.5/weather?q="+ search +"&mode=json&units=imperial&appid=2616b5aba9cde5c3435e1b66d6740d72").then(function(response){
           if(response.ok){
               response.json().then(function(apiData){
                   console.log(apiData);
                   setWeatherData(apiData);
                })
            }
        })
    
        
    
    }


     
return(
    <>
<Form onSubmit={(e)=>getWeather(e,search)}>
    <Form.Row className="align-items-center weatherSearch">
        <Col sm={8} md={8} lg={8}>
            <FormControl type="text" style={{marginLeft: "-5px"}} placeholder="Search" className="mr-sm-2" onChange={event =>setSearch(event.target.value.trim())}/>
        </Col>
            <Button type="submit" variant="outline-success" >Search</Button>
    </Form.Row>
</Form>
     {weatherData !== null ? <WeatherComponents data={weatherData} search={search}/> : ''} 
</>
)
}

export default WeatherSearch;