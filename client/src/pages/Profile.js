import React from "react";
import BenchContainer from "../components/BenchContainer";
import NavBar from "../components/NavBar";

function Profile() {
    const prop = {
        name: "Bobby",
        id: 7777
    }
    return(
    <>
        <NavBar />
        <BenchContainer 
        user={prop}/>
    </>    
    )
}

export default Profile;