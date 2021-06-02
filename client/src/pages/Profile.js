import React, { useState, useContext, useEffect } from 'react';
import BenchContainer from "../components/BenchContainer";
import ModalAddPlant from "../components/ModalAddPlant";
import ModalDeletePlant from "../components/ModalDeletePlant";
import Footer from "../components/Footer";
import API from "../utils/API";
import UserContext from "../utils/UserContext";

function Profile() {
    const [OwnedPlants, setOwnedPlants] = useState([]);


    const { user } = useContext(UserContext);

    const getOwnedPlants = () => {

        if (!OwnedPlants) {
            return;
        }
        else {
            API.getOwnedPlants(user.id)

                .then(res => { setOwnedPlants(res.data) })

                .catch(err => console.log(err));
        }
    }

    useEffect(getOwnedPlants, []);

    

    return (
        <>
            <BenchContainer
                OwnedPlants={OwnedPlants}
                title={user.name + "'s Potting Bench"}
                addPlant = {<ModalAddPlant getOwnedPlants= {getOwnedPlants} />}
                deletePlant = {<ModalDeletePlant Owned_Plants= {OwnedPlants} getOwnedPlants= {getOwnedPlants}/>}
                getOwnedPlants= {getOwnedPlants}
            />
            <Footer />
        </>
    )
}

export default Profile;