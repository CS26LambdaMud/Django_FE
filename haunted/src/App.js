import React from 'react';
import { Route, Switch } from "react-router-dom";
import PrivateRoute from './utils/PrivateRoute'
import SignIn from './components/SignIn';
import SignUp from '../src/components/SignUp'
import Game from '../src/components/Game'
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
      <Route path="/signup" component={SignUp} />
      <Route path="/signin" component={SignIn} />
      <PrivateRoute path="/play" component={Game}/>
      </Switch>
    </div>
  );
}

export default App;
