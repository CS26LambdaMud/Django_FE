import React from "react"
import {Link} from "react-router-dom"
import logo from './haunted.png'
import {
    container
} from "./navbar.module.css"

const Navbar = () => {
    return (
        <div className="top-container">
      <div className={container}>
          <img src={logo} alt="logo"/>
          <Link to="/">Home</Link>
          <Link to="/play">Play</Link>
          <Link to="/signin">Sign In</Link>
          <Link to="/signup">Sign Up</Link>
      </div>
        </div>
    
    );
}

export default Navbar