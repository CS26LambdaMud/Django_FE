import React, {useEffect} from 'react';
import { Route, Switch } from "react-router-dom";
import PrivateRoute from './utils/PrivateRoute';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp'
import Game from './components/Game/Game'
import LandingPage from './components/landing';
import Navbar from "./components/navbar/navbar"
import './App.css';

function App() {
  let music = new Audio('menu.mp3');

  const playMusic = () =>{
    document.removeEventListener('click', playMusic)
    music.play();
    music.loop = true;
    
    // music.addEventListener('ended', new Audio('m.mp3').play())
  }

  useEffect(()=>{
    document.addEventListener('click', playMusic)
  },[])
  return (
    <div className="App">
      <Navbar/>
      <Switch>
      <Route exact path="/" component ={()=><LandingPage music = {music} />}/>
      <Route path="/signup" component={SignUp} />
      <Route path="/signin" component={SignIn} />
      <PrivateRoute path="/play" component={Game}/>
      </Switch>
    </div>
  );
}

export default App;
