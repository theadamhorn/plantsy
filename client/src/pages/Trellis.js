import React, { useState, useContext, useEffect } from 'react';
import BenchContainer from "../components/BenchContainer";
import Footer from "../components/Footer";
import API from "../utils/API";
import UserContext from "../utils/UserContext";

function Trellis() {
    const { authState } = useContext(UserContext);
    const [trellisPosts, setTrellisPosts] = useState([]);
    const [trellisComments, setTrellisComments] = useState([]);

    useEffect(() => {
        if (!trellisPosts) {
            return;
        }
        else {
            API.getTrellisPosts()
            API.getTrellisComments()
                .then(res => {
                    setTrellisPosts(res.data)
                    setTrellisComments(res.data)
                })
                .catch(err => console.log(err));
        }
    }, []);

    return (
        <>
            <BenchContainer
                posts={trellisPosts}
                comments={trellisComments}
                user={authState}
                title={"The Trellis"} />
            <Footer />
        </>
    )
}

export default Trellis;