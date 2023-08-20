import React from 'react'
import Logoo from "../../assests/logo.png"
import { Link } from 'react-router-dom'
function Logo() {
  return (
  <Link to="/" >  <img
    id="companyLogo"
    className="weblogo"
    src={Logoo}
    alt="logo"
  /></Link>
  )
}

export default Logo
