import React from 'react'
import logo from "../img/logo.png"
import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer>
      <img src={logo} alt="logo" />
      <span>Made with ❤️ and <b>React.js</b></span>
    </footer>
  )
}

export default Footer