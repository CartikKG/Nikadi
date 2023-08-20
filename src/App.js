import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home/Home";
import History from "./Pages/History/History";
// import Page2 from './Pages/Page2';
import Footer from "./Components/Footer";
import Timelinesection from "./Components/TimelineSection/Timelinesection";
// import About from './Components/Section1/Section1';
import Section1 from "./Components/Section1/Section1";
import Section2 from "./Components/Highlights/Highlights";
import Services from "./Components/Success/Success";
import { Route, Routes } from "react-router-dom";
import About from "./Pages/About/About";

function App() {
  const maxWidth = window.screen.width;
  const maxHeight = window.screen.height;

  function Random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  function Shadows(amount) {
    let shadow = "";
    for (let i = 0; i < amount; i++) {
      shadow +=
        Random(0, maxWidth) +
        "px " +
        Random(0, maxHeight) +
        "px " +
        "rgb(255," +
        Random(0, 256) +
        "," +
        Random(0, 256) +
        "), ";
    }
    shadow +=
      Random(0, maxWidth) +
      "px " +
      Random(0, maxHeight) +
      "px " +
      "rgb(255," +
      Random(0, 256) +
      "," +
      Random(0, 256) +
      ")";
    return shadow;
  }

  for (let i = 1; i <= 3; i++) {
    document.documentElement.style.setProperty("--shadows" + i, Shadows(100));
  }
  return (
    <>
      <div id="space">
        {/* <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div> */}
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/history" element={<History />} />
      </Routes>
      {/* <Home />
      <Section1/>
      <Timelinesection/>
      <Section2/>
      {/* <About/> */}
      {/* <History />
      <Services/> */}
      <Footer />
    </>
  );
}

export default App;
