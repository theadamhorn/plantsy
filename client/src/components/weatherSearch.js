import React, {useState} from 'react';
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import getWeather from "../utils/weather";

function WeatherSearch (props) {

    const [search, setSearch] = useState();


return(
    <>
<Form >
        <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={event =>setSearch(event.target.value.trim())}/>
        <Button variant="outline-success" onClick={()=>getWeather(search)}>Search</Button>
</Form>
</>
)
}

export default WeatherSearch;