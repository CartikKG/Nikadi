import React from "react";
import HamburgerMenu from "../../Components/Hamburgermenu";
import Section2 from "../../Components/Highlights/Highlights";
import Logo from "../../Components/Logo/Logo";
import Success from "../../Components/Success/Success";

function About() {
  return (
    <>
    {/* <Logo/> */}
      <HamburgerMenu />
      <Success/>
      <Section2/>
    </>
  );
}

export default About;
