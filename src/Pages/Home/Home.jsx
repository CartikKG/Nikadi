import React from "react";
import "./home.css";
import { TypeAnimation } from "react-type-animation";
import { Link, Routes, Route } from "react-router-dom";

import { useEffect } from "react";
import HamburgerMenu from "../../Components/Hamburgermenu";
import Timelinesection from "../../Components/TimelineSection/Timelinesection";
import Boxes from "../../Components/Boxes/Boxes";
import Logo from "../../Components/Logo/Logo";
import Success from "../../Components/Success/Success";
import Team from "../../Components/Team/Team";
import Whatwedo from "../../Components/Whatwedo/Whatwedo";
import Slider from "../../Components/Slider/Slider";
import Section1 from "../../Components/Section1/Section1";
import ScrollTab from "../../Components/Scroller/scrolltab";
import Scroller from "../../Components/Scroller/Scroller";

function Home() {
  window.onscroll = function() {scroll()};
  const scroll = () =>{
    if(window.pageYOffset>1200){

      // document.getElementById("wrapper").className="postingg"
    }
    console.log()
  }
  return (
    <>
    
      <HamburgerMenu />
      <div id="homestection">
        {/* <Logo/> */}
        <div id="mobileheadingdiv">
          <h1>NIKADI</h1>
          <h1>GROUP</h1>
          <h2> Lorem ipsum dolor si..</h2>
          <img
            style={{ width: "100%", marginTop: "30px" }}
            src="https://assets.website-files.com/58b756f5ffa7891d6aadc1ea/5ccb1c31cbb7c30b02d714ec_IPA%20Group%20hero.svg"
            alt="imh"
          />
        </div>
        <div id="headingDiv">
          <div>
            <TypeAnimation
              cursor={false}
              sequence={["NIKADI GROUP"]}
              speed={{ type: "keyStrokeDelayInMs", value: 40 }}
              wrapper="h1"
              repeat={0}
            />
            <h2> Lorem ipsum dolor si..</h2>
          </div>
          {/* <TypeAnimation
            cursor={true}
            sequence={[
              500,
              "Lorem ipsum dolor si..",
              300,
              "sdfsdfsdfsd dsfsdf",
              200,
              "Karr ertik dfgeok  ",
            ]}
            speed={50}
            deletionSpeed={65}
            wrapper="h2"
            repeat={Infinity}
          /> */}
          <img
            src="https://assets.website-files.com/58b756f5ffa7891d6aadc1ea/5ccb1c31cbb7c30b02d714ec_IPA%20Group%20hero.svg"
            alt="imh"
          />
        </div>

        {/* <div id="navLinks">
          <Link to="/history" className="navigation" smooth={true} >
            <span>{"HISTORY"}</span>
          </Link>
          <Link to="/aboutus" className="navigation" smooth={true} >
            <span>{"WHAT WE DO"}</span>
          </Link>
          <Link className="navigation" smooth={true} to="#home">
            <span>{"HOW WE DO"}</span>
          </Link>
          <Link className="navigation" smooth={true} to="#home">
            <span>{"PARTNERS"}</span>
          </Link>
          <Link className="navigation" smooth={true} to="#home">
            <span>{"FUTURE PLAN"}</span>
          </Link>
          <Link className="navigation" smooth={true} to="#home">
            <span>{"CONNECTS"}</span>
          </Link>
          <Link className="navigation" smooth={true} to="#home">
            <span>{"TEAM"}</span>
          </Link>
        </div> */}
      </div>
      {/* <Whatwedo /> */}
      <Section1/>
      {/* <Timelinesection /> */}
      {/* <Slider/> */}
      <Scroller/>
      <Team />
      <Boxes />
      <Success />
    </>
  );
}

export default Home;
