import React, { useState, useContext/*, useEffect*/ } from 'react';
import API from "../utils/API";
import UserContext from "../utils/UserContext";
import { useHistory } from 'react-router-dom'; // , useLocation,
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ModalSignUp from "./ModalSignUp";

function LoginModal(props) {
  const [modal, setModal] = useState(false);

  const [email, setEmail] = useState([]);
  const [password, setpassword] = useState([]);

  const { user, login } = useContext(UserContext);
  const history = useHistory();

  const loginFormHandler = (event) => {
    //   // Stop the browser from submitting the form so we can do so with JavaScript
    event.preventDefault();


    // Gather the data from the form elements on the page
    if (email && password) {
      // Send the e-mail and password to the server

      const body = JSON.stringify({ email, password });
      const config = { headers: { "Content-Type": "application/json" } };
      // const header = { 'Content-Type': 'application/json' };
      API.logInUser(body, config)
        .then(res => {
          login({
            id: res.data.user.id,
            name: res.data.user.name,
            email: res.data.user.email,
            isAuthenticated: true

          })
        })
        .then(res => {
          history.push("/profile");
        })
        .catch(err => { console.error(err) })
    };

  }


  return (
    <>
      <Button style={{ transition: "none" }} variant="login" size="lg" onClick={() => setModal(true)}>Login</Button>

      <Modal aria-labelledby="contained-modal-title-vcenter" centered show={modal} onHide={() => setModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Login
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="form login-form">
            <div className="form-group email-login">
              <label htmlFor="email-login">Email:</label>
              <input className="form-input" type="text" id="email-login" onChange={event => setEmail(event.target.value.trim())} />
            </div>
            <div className="form-group">
              <label htmlFor="password-login">Password:</label>
              <input className="form-input" type="password" id="password-login" onChange={event => setpassword(event.target.value.trim())} />
            </div>
            <div className="form-group">
              <button className="btn-login-form" type="submit" onClick={event => loginFormHandler(event)}>Login</button>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>

          <ModalSignUp />
          <Button style={{
            color: "#e4d7d0",
            fontFamily: "Kiwi Maru",
            fontWeight: 700,
            backgroundColor: "#0a4158",
            paddingLeft: "1em",
            paddingRight: "1em",
            paddingTop: "0.5em",
            paddingBottom: "0.5em",
            borderRadius: "10px"
          }} onClick={() => setModal(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default LoginModal;