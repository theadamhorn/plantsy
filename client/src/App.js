import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Gardeners from "./pages/Gardeners";
import Landing from "./pages/Landing";
import Plants from "./pages/Plants";
import Profile from "./pages/Profile";
import Trellis from "./pages/Trellis";
import './App.css';
import  UserContext from './utils/UserContext';
import NavBar from './components/NavBar';
import Private from "./components/Private"

function App() {
  const [user, setUser] = useState({
    id: null,
    name: null,
    email: null,
    isAuthenticated: false
  })
  function login( user ) {
    setUser(user)
  }

  function logout() {
    setUser({
      id: null,
      name: null,
      email: null,
      isAuthenticated: false
    })
  }

  return (
    <>

      <Router>
      <UserContext.Provider value={{user, login, logout}}>
          <NavBar />
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/plants' component={Plants} />
            <Private exact path='/gardeners' component={Gardeners} />
            <Private exact path='/profile' component={Profile} />
            <Private exact path='/trellis' component={Trellis} />
          </Switch>
          </UserContext.Provider>
      </Router>

    </>
  );
}

export default App;
