import React from "react"
import {Link} from "react-router-dom"
import {
    container
} from "./navbar.module.css"

const Navbar = () => {
    return (
      <div className={container}>
          <Link to="/">Home</Link>
          <Link to="/play">Play</Link>
          <Link to="/signin">Sign In</Link>
          <Link to="/signup">Sign Up</Link>
      </div>
    );
}

export default Navbar