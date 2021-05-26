import React, { useState, useContext } from 'react';
import BenchContainer from "../components/BenchContainer";
import Footer from "../components/Footer";
//import API from "../utils/API";
import UserContext from "../utils/UserContext";

function Trellis() {
    const { user } = useContext(UserContext);

    if(!user.isAuthenticated){
        document.location.replace('/')
      }
    

    return (
        <>
            <BenchContainer
                title={"The Trellis"} />
            <Footer />
        </>
    )
}

export default Trellis;