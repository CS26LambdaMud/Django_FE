import React from 'react';
import { Route, Switch } from "react-router-dom";
import PrivateRoute from './utils/PrivateRoute';
import SignIn from './components/SignIn';
<<<<<<< HEAD
import SignUp from '../src/components/SignUp'
import Game from '../src/components/Game'
=======
import SignUp from '../src/components/SignUp';
import LandingPage from './components/landing';
>>>>>>> 057efe7aa42530e9b821be2c652ba2e9682a5fab
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
      <Route path="/" component ={LandingPage} />
      <Route path="/signup" component={SignUp} />
      <Route path="/signin" component={SignIn} />
      <PrivateRoute path="/play" component={Game}/>
      </Switch>
    </div>
  );
}

export default App;
