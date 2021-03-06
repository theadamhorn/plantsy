import React, { useState, useEffect } from 'react';
import BenchContainer from "../components/BenchContainer";
import Footer from "../components/Footer";
import API from "../utils/API";


function Plants() {
    const [plantData, setPlantData] = useState([]);
    useEffect( () => {
        if (!plantData) {
            return;
        }
        else {
            API.getPlants()
                .then(res => {
                    setPlantData(res.data)
                })
                .catch(err => console.log(err));
        }
    }, []);
    
    return (
        <>
            <BenchContainer
                plants={plantData}
                title={"The Nursery"} />
                
            <Footer />
        </>
    )
}

export default Plants;