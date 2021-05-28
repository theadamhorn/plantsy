import React, { useEffect, useState } from 'react';
import PlantModal from "./ModalPlant";
import AccordionPlants from "./AccordionPlants";
import AccordionUser from "./AccordionUser";
import AccordionGardeners from "./AccordionGardeners";
import PlantBadge from "./PlantBadge";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSeedling } from '@fortawesome/free-solid-svg-icons'


export default function Accordion(props) {
    var [Gardener, setGardener] = useState(false);
    var [Plant, setPlant] = useState(false);
    var [OwnedPlant, setOwnedPlant] = useState(false);

    useEffect(() => {
        var location = document.location.pathname;

        if (location === '/plants') {
            setPlant(true);
        }
        if (location === '/gardeners') {
            setGardener(true);
            //  gardeners = props.gardeners.data;
        }
        if (location === '/profile') {
            setOwnedPlant(true)
        }

    }, [props])

    console.log(props);
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
    else return (<h1 className="mx-3">No information to display</h1>)


}