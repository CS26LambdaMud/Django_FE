import React from 'react';
import { Route, Switch } from "react-router-dom";
import PrivateRoute from './utils/PrivateRoute';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp'
import Game from './components/Game/Game'
import LandingPage from './components/landing';
import Navbar from "./components/navbar/navbar"
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
      <Route exact path="/" component ={LandingPage} />
      <Route path="/signup" component={SignUp} />
      <Route path="/signin" component={SignIn} />
      <PrivateRoute path="/play" component={Game}/>
      </Switch>
    </div>
  );
}

export default App;
