import React from "react";
import BenchContainer from "../components/BenchContainer";
import NavBar from "../components/NavBar";

function Gardeners() {
    const [gardeners, setGardeners] = useState([]);

    
    return(
    <>
        <NavBar />
        <BenchContainer />
    </>    
    )
}

export default Gardeners;