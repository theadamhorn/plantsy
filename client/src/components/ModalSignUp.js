import React, { useState, useContext } from 'react';
import API from "../utils/API";
import UserContext from "../utils/UserContext";
import { useHistory } from 'react-router-dom'; // , useLocation,
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
      
      function SignUpModal(props) {
        const [email, setEmail] = useState([]);
        const [password, setpassword] = useState([]);
        const [name, setname] = useState([]);

        const [modal, setModal] = useState(false);
        const {user, login} = useContext(UserContext);
        const history = useHistory();

        const signupFormHandler = async (event) => {
            event.preventDefault();
        
            if (name !== '' && email !== '' && password !== '') {
        
              const body = { name, email, password };
              const header = { 'Content-Type': 'application/json' };
        
              API.signupUser(body, header)
              .then(res => {
                login({
      
                    id: res.data.id,
                    name: res.data.name,
                    email: res.data.email,
                    isAuthenticated: true
                  
                }) 
              })
              .then(res =>{
                history.push("/profile");
              })
              .catch(err => { console.error(err) })
            }
          };

        return (<>
         <Button style={{ 
                 color: "#e4d7d0",
                  fontFamily: "Kiwi Maru",
                  fontWeight: 700,
                  backgroundColor: "#0a4158",
                  paddingLeft: "1em",
                  paddingRight: "1em",
                  paddingTop: "0.5em",
                  paddingBottom: "0.5em",
                  borderRadius: "10px"}} onClick={()=>setModal(true)}>Sign Up</Button>

        <Modal  aria-labelledby="contained-modal-title-vcenter" centered show={modal} onHide={() => setModal(false)}>
            <Modal.Header closeButton>
                <Modal.Title  id="contained-modal-title-vcenter">
              Signup
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="col-md-12">
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
                  <button className="btn-login-form" type="submit" onClick={signupFormHandler}>Signup</button>
                </div>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button style={{ 
                 color: "#e4d7d0",
                  fontFamily: "Kiwi Maru",
                  fontWeight: 700,
                  backgroundColor: "#0a4158",
                  paddingLeft: "1em",
                  paddingRight: "1em",
                  paddingTop: "0.5em",
                  paddingBottom: "0.5em",
                  borderRadius: "10px"}} onClick={()=>setModal(false)}>Back</Button>
            </Modal.Footer>   
      </Modal>
      </>
        );
      }
export default SignUpModal;