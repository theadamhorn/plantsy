import React, { useState, useContext, useEffect } from 'react';
import API from "../utils/API";
import UserContext from "../utils/UserContext";
import { Redirect } from 'react-router-dom';


function LoginModal({ loginShow, setLoginShow }) {
  const [email, setEmail] = useState([]);
  const [password, setpassword] = useState([]);
  const [name, setname] = useState([]);

  const {user, login} = useContext(UserContext)

  const loginFormHandler = async (event) => {
  //   // Stop the browser from submitting the form so we can do so with JavaScript
    event.preventDefault();


    // Gather the data from the form elements on the page
    if (email && password) {
      // Send the e-mail and password to the server
      const body = { email, password };
      const header = { 'Content-Type': 'application/json' };
      API.logInUser(body, header)
        .then(res => {
          login({

              id: res.data.user.id,
              name: res.data.user.name,
              email: res.data.user.email,
              isAuthenticated: true
            
          }) 
        })
    
        .then(console.log(user))
        // .then(document.location.replace('/profile'))
        .then(<Redirect from='/' to='/profile'/>)
        .catch(err => { console.error(err) })
    };

  }


  const signupFormHandler = async (event) => {
    event.preventDefault();

    if (name !== '' && email !== '' && password !== '') {

      const body = { name, email, password };
      const header = { 'Content-Type': 'application/json' };

      API.signupUser(body, header)
        // .then(res => {
        //   settingUserInfo(true, res.data.user )
        // })
    
        .then(document.location.replace('/profile'))
        .catch(err => { console.error(err) })
    }
  };

  return (
    <div>
      <div  className="modal fade" id="modal" aria-hidden="true" aria-labelledby="..." tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="col-md-12 text-center">
              <h2>Login</h2>
              <form className="form login-form">
                <div className="form-group">
                  <label htmlFor="email-login">Email:</label>
                  <input className="form-input" type="text" id="email-login" onChange={event => setEmail(event.target.value.trim())} />
                </div>
                <div className="form-group left">
                  <label htmlFor="password-login">Password:</label>
                  <input className="form-input" type="password" id="password-login" onChange={event => setpassword(event.target.value.trim())} />
                </div>
                <div className="form-group">
                  <button className="btn btn-primary" type="submit" onClick={loginFormHandler}>Login</button>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              {/* <!-- Toogle to second dialog --> */}
              <button className="btn btn-primary" data-bs-target="#modal2" data-bs-toggle="modal" data-bs-dismiss="modal">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Second modal dialog --> */}
      <div className="modal fade" id="modal2" aria-hidden="true" aria-labelledby="..." tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="col-md-12 text-center">
              <h2>Signup</h2>
              <form className="form signup-form">
                <div className="form-group">
                  <label htmlFor="name-signup">Name:</label>
                  <input className="form-input" type="text" id="name-signup" onChange={event => setname(event.target.value.trim())} />
                </div>
                <div className="form-group">
                  <label htmlFor="email-signup">Email:</label>
                  <input className="form-input" type="text" id="email-signup" onChange={event => setEmail(event.target.value.trim())} />
                </div>
                <div className="form-group left">
                  <label htmlFor="password-signup">Password:</label>
                  <input className="form-input" type="password" id="password-signup" onChange={event => setpassword(event.target.value.trim())} />
                </div>
                <div className="form-group">
                  <button className="btn btn-primary" type="submit" onClick={signupFormHandler}>Signup</button>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              {/* <!-- Toogle to first dialog, `data-bs-dismiss` attribute can be omitted - clicking on link will close dialog anyway --> */}
              <a className="btn btn-primary" href="#modal" data-bs-dismiss="modal" data-bs-toggle="modal" role="button">Back</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default LoginModal;