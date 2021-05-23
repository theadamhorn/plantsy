import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from "../utils/AuthContext";
import LoginModal from './ModalLogin';

export default function NavBar() {

    const { authData, setAuth } = useContext(AuthContext);
  
    const logout = async () => {
        // Make a POST request to destroy the session on the back end
        const response = await fetch('/api/users/logout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        }).then(res =>{
            setAuth({
                isAuthenticated: false,
                loading: false,
                user: res.data,
            })
        })
        .then(document.location.replace('/'))
        .catch(err => {console.error(err)})
    };

    var links;
    var logoutLink;
    if (authData.isAuthenticated) {
        links =
            <div>
                <li className="nav-item">
                    <Link to="/gardeners" className="nav-link">Gardeners</Link>
                </li>
                <li className="nav-item">
                    <Link to="/users" className="nav-link">My Plants</Link>
                </li>
                <li className="nav-item">
                    <Link to="/trellis" className="nav-link">Trellis</Link>
                </li>
            </div> 
        logoutLink= <div><a class="nav-link active" aria-current="page" data-bs-toggle="modal" href="#modal" role="button" onClick={logout}>Logout</a></div>
    } else {
        links =
        <div>
        <a class="nav-link active" aria-current="page" data-bs-toggle="modal" href="#modal" role="button">Login</a>
        <LoginModal/>
        </div>
    }

    return (

        // Nav code from main.handlebars modified with conditionals extracted as variables
        < nav className="navbar navbar-expand-lg" >
            <div className="container-fluid">
                <Link to="/" className="navbar-brand"><i className="fas fa-seedling fa-lg"></i> Plantsy</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-around" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/plants" className="nav-link active" aria-current="page">Plants</Link>
                        </li>
                        {links}
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                         {logoutLink}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}