import React from "react";
import BenchContainer from "../components/BenchContainer";
import NavBar from "../components/NavBar";

function Plants() {
    API.getPlants()
                .then(res => {
                    setPlantData(res.data)
                    setUserData([])
                    setOwnedPlantData([])
                })
                .catch(err => console.log(err));
    return(
    <>
        <NavBar />
        <BenchContainer />
    </>    
    )
}

export default Plants;