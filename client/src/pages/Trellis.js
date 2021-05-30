import React, { useState, useContext, useEffect } from 'react';
import BenchContainer from "../components/BenchContainer";
import Footer from "../components/Footer";
import API from "../utils/API";
import UserContext from "../utils/UserContext";

export default function Trellis() {
    const { user } = useContext(UserContext);
    const [trellisPosts, setTrellisPosts] = useState([]);
    // const [trellisComments, setTrellisComments] = useState([]);

    useEffect(() => {
        if (!trellisPosts) {
            return;
        }
        else {
            API.getTrellisPosts()
                // API.getTrellisComments()
                .then(res => {
                    console.log(res)
                    setTrellisPosts(res.data)
                    // setTrellisComments(res.data)
                })
                .catch(err => console.log(err));
        }
    }, []);

    return (
        <>
            <BenchContainer
                posts={trellisPosts}
                user={user}
                title={"The Trellis"} />
            <Footer />
        </>
    )
}

