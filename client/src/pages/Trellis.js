import React/*, { useState, useContext }*/ from 'react';
import BenchContainer from "../components/BenchContainer";
import Footer from "../components/Footer";
//import API from "../utils/API";
//import AuthContext from "../utils/AuthContext";

function Trellis() {
    const { authData, setAuth } = useContext(AuthContext);
    return (
        <>
            <BenchContainer
                title={"The Trellis"} />
            <Footer />
        </>
    )
}

export default Trellis;