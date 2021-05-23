import React, { useState, useContext , useEffect } from 'react';
import BenchContainer from "../components/BenchContainer";
import NavBar from "../components/NavBar";
import API from "../utils/API";
import AuthContext from "../utils/AuthContext";

function Profile() {
    const [OwnedPlants, setOwnedPlants] = useState([])
    const { authData, setAuth } = useContext(AuthContext);
 /*   const prop = {
        name: "Bobby",
        id: 7777
    } */

    useEffect(() => {
        if (!OwnedPlants) {
          return;
        }
        else{
            API.getOwnedPlants(authData.user.id).then(res => {
            setOwnedPlants(res.data)
        })
        .catch(err => console.log(err));
    }},[]);        
    


    return(
    <>
        <NavBar />
        <BenchContainer
        OwnedPlants = {OwnedPlants}
        title = {authData.user.name + "'s Potting Bench"}
        // user = userData     ex: userData[id: ## , name: "Billy Bob"]
        />
    </>    
    )
}

export default Profile;