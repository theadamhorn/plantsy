import React, { useState, useContext } from 'react';
import BenchContainer from "../components/BenchContainer";
import Footer from "../components/Footer";
import UserContext from "../utils/UserContext";
import API from "../utils/API";


function Plants() {
    const [plantData, setPlantData] = useState([]);
    const { user } = useContext(UserContext);

    if(!user.isAuthenticated){
        document.location.replace('/')
      }
    

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