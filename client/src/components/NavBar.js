import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from "../utils/AuthContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSeedling, faSignOutAlt, faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import LoginModal from './ModalLogin';
import API from '../utils/API';

export default function NavBar() {
    const { authData, setAuth } = useContext(AuthContext);


    const logout = async () => {
        // Make a POST request to destroy the session on the back end
        await fetch('/api/users/logout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        }).then(res => {
            setAuth({
                isAuthenticated: false,
                loading: false,
                user: res.data,
            })
        })
            .then(document.location.replace('/'))
            .catch(err => { console.error(err) })
    };

    var links;
    var log_in_out_Link;
    if (authData.isAuthenticated) {
        links =
            <div className="row nav-row">
                <Link to="/gardeners" className="nav-link col">Gardeners</Link>
                <Link to="/users" className="nav-link col mx-1">My Plants</Link>
                <Link to="/trellis" className="nav-link col">Trellis</Link>
            </div>
        log_in_out_Link = <div><a class="nav-link active" aria-current="page" data-bs-toggle="modal" href="#modal" role="button" onClick={logout}><FontAwesomeIcon icon={faSignOutAlt} className="fa-lg" /></a></div>
    } else {
       links =''
        
        log_in_out_Link =<div>
        <a className="nav-link active" aria-current="page" data-bs-toggle="modal" href="#modal" role="button">Login</a>
        <LoginModal/>
        </div>
    }

    return (

        // Nav code from main.handlebars modified with conditionals extracted as variables
        < nav className="navbar navbar-expand-lg" >
            <div className="container-fluid">
                <Link to="/" className="navbar-brand"><FontAwesomeIcon icon={faSeedling} className="fa-lg" /> Plantsy</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <Link to="/plants" className="nav-link active mx-4" aria-current="page">Plants</Link>
                    {links}
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            {log_in_out_Link}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}
