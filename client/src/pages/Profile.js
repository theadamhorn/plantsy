import React from "react";
import BenchContainer from "../components/BenchContainer";
import NavBar from "../components/NavBar";

function Profile() {
    const [OwnedPlants, setOwnedPlants] = useState([])
 /*   const prop = {
        name: "Bobby",
        id: 7777
    } */

   const ownedPlantData =  (API.getOwnedPlants().then(res => {
                       setOwnedPlantData(res.data)
                         }).catch(err => console.log(err)));
                
    setOwnedPlants(ownedPlantData);


    return(
    <>
        <NavBar />
        <BenchContainer
        OwnedPlants = {OwnedPlants}
        title = "Potting Bench"
        // user = userData     ex: userData[id: ## , name: "Billy Bob"]
        />
    </>    
    )
}

export default Profile;