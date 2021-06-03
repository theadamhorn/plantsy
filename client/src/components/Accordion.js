import React, { useEffect, useState } from 'react';
import AccordionPlants from "./AccordionPlants";
import AccordionUser from "./AccordionUser";
import AccordionGardeners from "./AccordionGardeners";
import TrellisPosts from "./TrellisPosts";
// import API from '../utils/API';


export default function Accordion(props) {
    var [Gardener, setGardener] = useState(false);
    var [Plant, setPlant] = useState(false);
    var [OwnedPlant, setOwnedPlant] = useState(false);
    var [Trellis, setTrellisPosts] = useState(false);


    useEffect(() => {
        var location = document.location.pathname;

        if (location === '/plants') {
            setPlant(true);
        }
        if (location === '/gardeners') {
            setGardener(true);
        }
        if (location === '/profile') {
            setOwnedPlant(true)
        }
        if (location === '/trellis') {
            setTrellisPosts(true)
        }

    }, [props])



    if (Plant === true) {
        var plants = props.plants;
        return (
            <>
                <AccordionPlants
                    plants={plants} />

            </>)
    }

    else if (OwnedPlant === true) {
        var ownedPlants = props.OwnedPlants;
        return (
            <>
                <AccordionUser
                    ownedPlants={ownedPlants}
                    getOwnedPlants={props.getOwnedPlants}
                />
            </>)
    }

    else if (Gardener === true) {
        var gardeners = props.gardeners;
        return (
            <>
                <AccordionGardeners
                    gardeners={gardeners}
                />

            </>)
    }

    else if (Trellis === true) {
        return (
            <>
                <TrellisPosts />

            </>)
    }
    else return (<h1 className="mx-3">No information to display</h1>)


}