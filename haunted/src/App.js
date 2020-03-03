import React from 'react';
import { Route, Switch } from "react-router-dom";
import PrivateRoute from './utils/PrivateRoute';
import SignIn from './components/SignIn';
import SignUp from '../src/components/SignUp';
import LandingPage from './components/landing';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
      <Route path="/" component ={LandingPage} />
      <Route path="/signup" component={SignUp} />
      <Route path="/signin" component={SignIn} />
      </Switch>
    </div>
  );
}

export default App;
