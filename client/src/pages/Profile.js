import React, { useState, useContext, useEffect } from 'react';
import BenchContainer from "../components/BenchContainer";
import Footer from "../components/Footer";
import API from "../utils/API";
import UserContext from "../utils/UserContext";

function Profile() {
    const [OwnedPlants, setOwnedPlants] = useState([]);
    
    const {user} = useContext(UserContext);

  console.log(user);
    
    /*   const prop = {
           name: "Bobby",
           id: 7777
       } */

    useEffect(() => {
       
        if (!OwnedPlants) {
            return;
        }
        else {
            API.getOwnedPlants(user.id).then(res => {
                setOwnedPlants(res.data)
            })
                .catch(err => console.log(err));
        }
    }, []);



    return (
        <>
            <BenchContainer
                OwnedPlants={OwnedPlants}
                title={user.name + "'s Potting Bench"}
            // user = userData     ex: userData[id: ## , name: "Billy Bob"]
            />
            <Footer />
        </>
    )
}

export default Profile;