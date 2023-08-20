import React from "react";
import "./index.css";
import Logo from "../../assests/logo.png";
import { Link } from "react-router-dom";
function HamburgerMenu() {
  return (<>
      <Link to="/">
        <img id="companyLogo" src={Logo} alt="logo" />
      </Link>
    <div class="navbar">
      <div class="container nav-container">
        <input class="checkbox" type="checkbox" name="" id="" />
        <div class="hamburger-lines">
          <span class="line line1"></span>
          <span class="line line2"></span>
          <span class="line line3"></span>
        </div>
        {/* <div class="logo">
                <h1>Navbar</h1>
              </div> */}

        <div class="menu-items">
          <div style={{width:"100%", height:"40px", background:"#c4750f", position:"absolute", top:"0%",width:"4%", left:"0%",height:"100vh"}}></div>
          <li>
            <Link to="/">Home</Link>
          </li>
          {/* <li>
            <Link to="/history">HISTORY</Link>
          </li> */}
          <li>
            <Link to="/aboutus">About Us</Link>
          </li>
          {/* <li>
            <Link to="#">HOW WE DO</Link>
          </li> */}
          {/* <li>
            <Link to="#">PARTNERS</Link>
          </li> */}
          {/* <li>
            <Link to="#">FUTURE PLAN</Link>
          </li> */}
          <li>
            <Link  to="/history"  >CONNECTS</Link>
          </li>
          {/* <li>
            <Link to="#">TEAM</Link>
          </li> */}
        </div>
      </div>
    </div>
    </>
  );
}

export default HamburgerMenu;
