import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from "../utils/AuthContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSeedling } from '@fortawesome/free-solid-svg-icons'
import LoginModal from './ModalLogin';

export default function NavBar() {

    const { authData, setAuth } = useContext(AuthContext);
    var response = '';
    const loginFormHandler = async (event) => {
        // Stop the browser from submitting the form so we can do so with JavaScript
        event.preventDefault();


        // Gather the data from the form elements on the page
        const email = "sal@hotmail.com";
        // document.querySelector('#email-login').value.trim();
        const password = "password12345";
        // document.querySelector('#password-login').value.trim();

        if (email && password) {
            // Send the e-mail and password to the server
            const body = { email, password };
            const header = { 'Content-Type': 'application/json' }

            API.logInUser(body, header)
                .then(res => {
                    setAuth({
                        isAuthenticated: true,
                        loading: false,
                        user: res.data,
                    })
                })
                .then(document.location.replace('/profile'))
                .catch(err => { console.error(err) })
        };

    }


    // const signupFormHandler = async (event) => {
    //     event.preventDefault();

    //     const name = document.querySelector('#name-signup').value.trim();
    //     const email = document.querySelector('#email-signup').value.trim();
    //     const password = document.querySelector('#password-signup').value.trim();

    //     if (name && email && password) {
    //       const response = await fetch('/api/users/signup', {
    //         method: 'POST',
    //         body: JSON.stringify({ name, email, password }),
    //         headers: { 'Content-Type': 'application/json' },
    //       });
    //   console.log(JSON.stringify({ name, email, password }))
    //       if (response.ok) {
    //         document.location.replace('/users');
    //       } else {
    //         alert(response.statusText);
    //       }
    //     }
    //   };

    // document
    //     .querySelector('.login-form') // <== Check this selector on Plantsy app
    //     .addEventListener('submit', loginFormHandler);

    // document
    //     .querySelector('.signup-form')
    //     .addEventListener('submit', signupFormHandler);


    var links
    var login

    const logout = async () => {
        // Make a POST request to destroy the session on the back end
        const response = await fetch('/api/users/logout', {
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
        logoutLink = <div><a class="nav-link active" aria-current="page" data-bs-toggle="modal" href="#modal" role="button" onClick={logout}>Logout</a></div>
    } else {
        links =
            <div>
                <a class="nav-link active" aria-current="page" data-bs-toggle="modal" href="#modal" role="button">Login</a>
                <LoginModal />
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