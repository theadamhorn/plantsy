import React, { useState, useContext, useEffect } from 'react';
import BenchContainer from "../components/BenchContainer";
import Footer from "../components/Footer";
import API from "../utils/API";
import UserContext from "../utils/UserContext";

function Gardeners() {
    const [gardeners, setGardeners] = useState([]);

    const { user } = useContext(UserContext);

    useEffect(() => {
        if (!gardeners) {
            return;
        }
        else {
            API.getUsers()
                .then(res => {
                    setGardeners(res);

                })
                .catch(err => console.log(err));
        }
    }, []);

    return (
        <>
            <BenchContainer
                gardeners={gardeners}
                title={"The Potting Bench"}
            />
            <Footer />
        </>
    )
}

export default Gardeners;