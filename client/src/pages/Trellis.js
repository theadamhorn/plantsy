import React, { useState, useContext } from 'react';
import BenchContainer from "../components/BenchContainer";
import NavBar from "../components/NavBar";
//import API from "../utils/API";
import AuthContext from "../utils/AuthContext";

function Trellis() {
    const { authData, setAuth } = useContext(AuthContext);
    return(
    <>
        <NavBar />
        <BenchContainer 
        title={"The Trellis"}/>
    </>    
    )
}

export default Trellis;