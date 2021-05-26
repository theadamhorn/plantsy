import React, { useState, useContext, useEffect } from 'react';
import BenchContainer from "../components/BenchContainer";
import Footer from "../components/Footer";
import API from "../utils/API";
import AuthContext from "../utils/AuthContext";
function Gardeners() {
    const { authData, setAuth } = useContext(AuthContext);
    const [gardeners, setGardeners] = useState([]);

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
                user={authData}
                title={"The Potting Bench"}
            />
            <Footer />
        </>
    )
}

export default Gardeners;