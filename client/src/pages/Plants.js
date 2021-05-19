import React from "react";
import BenchContainer from "../components/BenchContainer";
import NavBar from "../components/NavBar";

function Plants() {

    var passedProp =[{
        plant: "Spider",
        genus: "Thug",
        species: "Monster",
        id: 12345,
        commonName: "Lovey Dovey"
    },{
        plant: "Burkin",
        genus: "Pretty",
        species: "Princess",
        id: 12346,
        commonName: "superDuper"
    }]

    return(
    <>
        <NavBar />
        <BenchContainer
        plants={passedProp}
        />
    </>    
    )
}

export default Plants;