import React, { useContext } from 'react';
import BenchContainer from "../components/BenchContainer";
import Footer from "../components/Footer";
import UserContext from "../utils/UserContext";

export default function Trellis() {
    const { user } = useContext(UserContext);


    return (
        <>
            <BenchContainer
                user={user}
                title={"The Trellis"} />
            <Footer />
        </>
    )
}

