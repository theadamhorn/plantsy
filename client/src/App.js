import React, { useState, useEffect } from "react";
import API from "./utils/API";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Gardeners from "./pages/Gardeners";
import Landing from "./pages/Landing";
import Plants from "./pages/Plants";
import Profile from "./pages/Profile";
import Trellis from "./pages/Trellis";
import './App.css';
import UserContext from './utils/UserContext';
import NavBar from './components/NavBar';
import Private from "./components/Private"
import EasterEgg from "./pages/EasterEgg";

function App() {
  const [user, setUser] = useState({
    id: null,
    name: null,
    email: null,
    isAuthenticated: false
  })

  function login(user) {
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

  useEffect(() => {
    const getUser = async () => {
      const currentUser = await API.getUser()
      if (currentUser.data.id) {
        setUser({
          id: currentUser.data.id,
          name: currentUser.data.name,
          email: currentUser.data.email,
          isAuthenticated: true
        })
      }
    }
    getUser()
  }, [])

  return (
    <>

      <Router>
        <UserContext.Provider value={{ user, login, logout }}>
          <NavBar />
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/plants' component={Plants} />
            <Route exact path='/thanks' component={EasterEgg} />
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
