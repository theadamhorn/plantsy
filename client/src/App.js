import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import NavBar from "./components/NavBar";
import BenchContainer from "./components/BenchContainer";
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
          <Route path='/plants' component={Plants} />
          <Route path='/gardeners' component={Gardeners} />
          <Route path='/profile' component={Profile} />
          <Route path='/trellis' component={Trellis} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
