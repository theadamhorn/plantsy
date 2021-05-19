import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Gardeners from "./pages/Gardeners";
import Landing from "./pages/Landing";
import Plants from "./pages/Plants";
import Profile from "./pages/Profile";
import Trellis from "./pages/Trellis";
import './App.css';

function App() {
  return (
    <>
      {/* <NavBar />, */}

      <Router>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/plants' component={Plants} />
          <Route exact path='/gardeners' component={Gardeners} />
          <Route exact path='/profile' component={Profile} />
          <Route exact path='/trellis' component={Trellis} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
