import React, { useState, useContext, useEffect } from 'react';
import BenchContainer from "../components/BenchContainer";
import Footer from "../components/Footer";
import API from "../utils/API";
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

