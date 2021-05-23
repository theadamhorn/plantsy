import React from "react";
import BenchContainer from "../components/BenchContainer";
import Footer from "../components/Footer";

function Profile() {

    const prop = {
        name: "Bobby",
        id: 7777
    }
    return (
        <>
            <BenchContainer
                user={prop} />
            <Footer />

        </>
    )
}

export default Profile;