import React, { useState, useContext, useEffect } from 'react';
import BenchContainer from "../components/BenchContainer";
import ModalAddPlant from "../components/ModalAddPlant";
import Footer from "../components/Footer";
import API from "../utils/API";
import UserContext from "../utils/UserContext";

function Profile() {
    const [OwnedPlants, setOwnedPlants] = useState([]);


    const { user } = useContext(UserContext);


    useEffect(() => {

        if (!OwnedPlants) {
            return;
        }
        else {
            API.getOwnedPlants(user.id)

                .then(res => { setOwnedPlants(res.data) })

                .catch(err => console.log(err));
        }
    }, []);



    return (
        <>
            <BenchContainer
                OwnedPlants={OwnedPlants}
                title={user.name + "'s Potting Bench"}
                addPlant = {<ModalAddPlant/>}

            />
            <Footer />
        </>
    )
}

export default Profile;