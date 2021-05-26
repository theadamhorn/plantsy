import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from "../utils/UserContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSeedling, faSignOutAlt, faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import LoginModal from './ModalLogin';
import API from '../utils/API';

export default function NavBar() {

    const { user, loginout } = useContext(UserContext)

    console.log(user)

    const logout = async () => {
        // Make a POST request to destroy the session on the back end
        await fetch('/api/users/logout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        }).then(res => {
            logout(false, '')
        })
            .then(document.location.replace('/'))
            .catch(err => { console.error(err) })
    };

    var links;
    var log_in_out_Link;
    if (user.isAuthenticated) {
        links = <>
            <li className="nav-item">
                <Link to="/gardeners" className="nav-link">Gardeners</Link>
            </li>
            <li className="nav-item">
                <Link to="/users" className="nav-link">My Plants</Link>
            </li>
            <li className="nav-item">
                <Link to="/trellis" className="nav-link">Trellis</Link>
            </li>
        </>;

        log_in_out_Link = <><Link className="nav-link" aria-current="page" data-bs-toggle="modal" to="#modal" role="button" onClick={logout}><FontAwesomeIcon icon={faSignOutAlt} className="fa-lg" /></Link></>
    } else {
        links = ''

        log_in_out_Link = <>
            <Link className="nav-link" aria-current="page" data-bs-toggle="modal" to="#modal" role="button">Login</Link>
            <LoginModal />
        </>
    }

    return (

        // Nav code from main.handlebars modified with conditionals extracted as variables
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">

                <Link to="/" className="navbar-brand"><FontAwesomeIcon icon={faSeedling} className="fa-lg" /> Plantsy</Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/plants" className="nav-link" aria-current="page">Plants</Link>
                        </li>
                        {links}
                    </ul>
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
