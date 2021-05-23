import React, { useState, useContext } from 'react';
import API from "../utils/API";
import AuthContext from "../utils/AuthContext";
import { Redirect } from 'react-router-dom';
import { Modal } from 'react-bootstrap';

function LoginModal({ loginShow, setLoginShow }) {
  const [email, setEmail] = useState([]);
  const [password, setpassword] = useState([]);
  const [name, setname] = useState([]);


  const { authData, setAuth } = useContext(AuthContext);

  const loginFormHandler = async (event) => {
    // Stop the browser from submitting the form so we can do so with JavaScript
    event.preventDefault();


    // Gather the data from the form elements on the page
    if (email && password) {
      // Send the e-mail and password to the server
      const body = { email, password };
      const header = { 'Content-Type': 'application/json' };
      API.logInUser(body, header)
        .then(res => {
          console.log(res.data)
          setAuth({
            ...authData,
            isAuthenticated: true,
            loading: false,
            user: res.data.user,
          })
          setLoginShow(false)
        })
        .then(<Redirect to='/profile' />)
        .catch(err => { console.error(err) })
    };

  }


  const signupFormHandler = async (event) => {
    event.preventDefault();

    if (name != '' && email != '' && password != '') {

      const body = { name, email, password };
      const header = { 'Content-Type': 'application/json' };

      API.signupUser(body, header)
        .then(res => {
          setAuth({
            isAuthenticated: true,
            loading: false,
            user: res.data,
          })
        })
        .then(document.location.replace('/users'))
        .catch(err => { console.error(err) })
    }
  };

  return (
    <div>
      <Modal show={loginShow} class="modal fade" id="modal" aria-hidden="true" aria-labelledby="..." tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="col-md-12 text-center">
              <h2>Login</h2>
              <form class="form login-form">
                <div class="form-group">
                  <label for="email-login">Email:</label>
                  <input class="form-input" type="text" id="email-login" onChange={event => setEmail(event.target.value.trim())} />
                </div>
                <div class="form-group left">
                  <label for="password-login">Password:</label>
                  <input class="form-input" type="password" id="password-login" onChange={event => setpassword(event.target.value.trim())} />
                </div>
                <div class="form-group">
                  <button class="btn btn-primary" type="submit" onClick={loginFormHandler}>Login</button>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              {/* <!-- Toogle to second dialog --> */}
              <button class="btn btn-primary" data-bs-target="#modal2" data-bs-toggle="modal" data-bs-dismiss="modal">Sign Up</button>
            </div>
          </div>
        </div>
      </Modal>
      {/* <!-- Second modal dialog --> */}
      <div class="modal fade" id="modal2" aria-hidden="true" aria-labelledby="..." tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="col-md-12 text-center">
              <h2>Signup</h2>
              <form class="form signup-form">
                <div class="form-group">
                  <label for="name-signup">Name:</label>
                  <input class="form-input" type="text" id="name-signup" onChange={event => setname(event.target.value.trim())} />
                </div>
                <div class="form-group">
                  <label for="email-signup">Email:</label>
                  <input class="form-input" type="text" id="email-signup" onChange={event => setEmail(event.target.value.trim())} />
                </div>
                <div class="form-group left">
                  <label for="password-signup">Password:</label>
                  <input class="form-input" type="password" id="password-signup" onChange={event => setpassword(event.target.value.trim())} />
                </div>
                <div class="form-group">
                  <button class="btn btn-primary" type="submit" onClick={signupFormHandler}>Signup</button>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              {/* <!-- Toogle to first dialog, `data-bs-dismiss` attribute can be omitted - clicking on link will close dialog anyway --> */}
              <a class="btn btn-primary" href="#modal" data-bs-dismiss="modal" data-bs-toggle="modal" role="button">Back</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default LoginModal;