import React, { useEffect } from "react";
import "./scroller.css";
function Scroller() {
  useEffect(()=>{
    document.getElementById("integrations").style.bottom = "120px";
    document.getElementById("modeling").style.bottom = "70px";
    document.getElementById("plans").style.bottom = "54px";
    document.getElementById("scenarios").style.bottom = "15px";
    document.getElementById("reports").style.bottom = "0px";
  },[])
  const stackUpDiv = () => {

  }
  const integrations = () => {
    //postion
    document.getElementById("integrations").style.bottom = "120px";
    document.getElementById("modeling").style.bottom = "70px";
    document.getElementById("plans").style.bottom = "54px";
    document.getElementById("scenarios").style.bottom = "15px";
    document.getElementById("reports").style.bottom = "0px";

    //content
    document.getElementById("integrationsContent").style.display = "block";
    document.getElementById("modelingContent").style.display = "none";
    document.getElementById("plansContent").style.display = "none";
    document.getElementById("scenariosContent").style.display = "none";
    document.getElementById("reportsContent").style.display = "none";

    document.getElementById("integrations").style.color = "#f2d166";
        document.getElementById("modeling").style.color = "#a5a5a5";
        document.getElementById("plans").style.color = "#a5a5a5";
        document.getElementById("scenarios").style.color = "#a5a5a5";
        document.getElementById("reports").style.color = "#a5a5a5";
  };
  const modeling = () => {

    document.getElementById("integrations").style.bottom = `247px`;
    document.getElementById("modeling").style.bottom = "70px";
    document.getElementById("plans").style.bottom = "54px";
    document.getElementById("scenarios").style.bottom = "15px";
    document.getElementById("reports").style.bottom = "0px";

    document.getElementById("integrationsContent").style.display = "none";
    document.getElementById("modelingContent").style.display = "block";
    document.getElementById("plansContent").style.display = "none";
    document.getElementById("scenariosContent").style.display = "none";
    document.getElementById("reportsContent").style.display = "none";

    //colour of div
    document.getElementById("integrations").style.color = "#a5a5a5";
    document.getElementById("modeling").style.color = "#f2d166";
    document.getElementById("plans").style.color = "#a5a5a5";
    document.getElementById("scenarios").style.color = "#a5a5a5";
    document.getElementById("reports").style.color = "#a5a5a5";
  }
  const plans = () => {
    document.getElementById("integrationsContent").style.display = "none";
    document.getElementById("modelingContent").style.display = "none";
    document.getElementById("plansContent").style.display = "block";
    document.getElementById("scenariosContent").style.display = "none";
    document.getElementById("reportsContent").style.display = "none";

    //colour of div
    document.getElementById("integrations").style.color = "#a5a5a5";
    document.getElementById("modeling").style.color = "#a5a5a5";
    document.getElementById("plans").style.color = "#f2d166";
    document.getElementById("scenarios").style.color = "#a5a5a5";
    document.getElementById("reports").style.color = "#a5a5a5";

    document.getElementById("integrations").style.bottom = `247px`;
    document.getElementById("modeling").style.bottom = `218px`;
    document.getElementById("plans").style.bottom = "54px";
    document.getElementById("scenarios").style.bottom = "15px";
    document.getElementById("reports").style.bottom = "0px";
  };
  const scenarios = () => {
    document.getElementById("integrationsContent").style.display = "none";
    document.getElementById("modelingContent").style.display = "none";
    document.getElementById("plansContent").style.display = "none";
    document.getElementById("scenariosContent").style.display = "block";
    document.getElementById("reportsContent").style.display = "none";

    //colour of div
    document.getElementById("integrations").style.color = "#a5a5a5";
    document.getElementById("modeling").style.color = "#a5a5a5";
    document.getElementById("plans").style.color = "#a5a5a5";
    document.getElementById("scenarios").style.color = "#f2d166";
    document.getElementById("reports").style.color = "#a5a5a5";

    document.getElementById("integrations").style.bottom = `247px`;
    document.getElementById("modeling").style.bottom = `218px`;
    document.getElementById("plans").style.bottom = `195px`;
    document.getElementById("scenarios").style.bottom = "15px";
    document.getElementById("reports").style.bottom = "0px";
    //colour of div
    document.getElementById("integrations").style.color = "#a5a5a5";
    document.getElementById("modeling").style.color = "#a5a5a5";
    document.getElementById("plans").style.color = "#a5a5a5";
    document.getElementById("scenarios").style.color = "#f2d166";
    document.getElementById("reports").style.color = "#a5a5a5";
  };

  const reports = () => {
    document.getElementById("integrations").style.bottom = `247px`;
    document.getElementById("modeling").style.bottom = `218px`;
    document.getElementById("plans").style.bottom = `195px`;
    document.getElementById("scenarios").style.bottom = `149.8px`;
    document.getElementById("reports").style.bottom = "0px";

    document.getElementById("integrationsContent").style.display = "none";
    document.getElementById("modelingContent").style.display = "none";
    document.getElementById("plansContent").style.display = "none";
    document.getElementById("scenariosContent").style.display = "none";
    document.getElementById("reportsContent").style.display = "block";

    document.getElementById("integrations").style.color = "#a5a5a5";
    document.getElementById("modeling").style.color = "#a5a5a5";
    document.getElementById("plans").style.color = "#a5a5a5";
    document.getElementById("scenarios").style.color = "#a5a5a5";
    document.getElementById("reports").style.color = "#f2d166";
  };

  async function captureScrollPosition() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 1350 && scrollTop < 2254.2667236328125) {
      document.getElementById("scroller").style.position = "fixed";
      document.getElementById("scroller").style.top = "8%";
      document.getElementById("scroller").style.left = "5%";
      if (scrollTop > 1350 && scrollTop < 1405) {
        // document.getElementById("integrations").style.bottom = `170PX`;
        document.getElementById("integrations").style.bottom = "120px";
        document.getElementById("modeling").style.bottom = "70px";
        document.getElementById("plans").style.bottom = "54px";
        document.getElementById("scenarios").style.bottom = "15px";
        document.getElementById("reports").style.bottom = "0px";
      }
      if (scrollTop > 1400 && scrollTop < 1600) {
        document.getElementById("integrations").style.position = "relative";
        document.getElementById("integrations").style.bottom = `${
          scrollTop - 1280
        }px`;

        document.getElementById("integrationsContent").style.display = "block";
        document.getElementById("modelingContent").style.display = "none";
        document.getElementById("plansContent").style.display = "none";
        document.getElementById("scenariosContent").style.display = "none";
        document.getElementById("reportsContent").style.display = "none";

        //colour of div
        document.getElementById("integrations").style.color = "#f2d166";
        document.getElementById("modeling").style.color = "#a5a5a5";
        document.getElementById("plans").style.color = "#a5a5a5";
        document.getElementById("scenarios").style.color = "#a5a5a5";
        document.getElementById("reports").style.color = "#a5a5a5";
      }
      if (scrollTop > 1600 && scrollTop < 1750) {
        document.getElementById("integrationsContent").style.display = "none";
        document.getElementById("modelingContent").style.display = "block";
        document.getElementById("plansContent").style.display = "none";
        document.getElementById("scenariosContent").style.display = "none";
        document.getElementById("reportsContent").style.display = "none";

        //colour of div
        document.getElementById("integrations").style.color = "#a5a5a5";
        document.getElementById("modeling").style.color = "#f2d166";
        document.getElementById("plans").style.color = "#a5a5a5";
        document.getElementById("scenarios").style.color = "#a5a5a5";
        document.getElementById("reports").style.color = "#a5a5a5";

        document.getElementById("integrations").style.bottom = `247px`;
        document.getElementById("modeling").style.position = "relative";
        document.getElementById("modeling").style.bottom = `${
          scrollTop - 1520
        }px`;
      }
      if (scrollTop > 1750 && scrollTop < 1900) {
        document.getElementById("integrationsContent").style.display = "none";
        document.getElementById("modelingContent").style.display = "none";
        document.getElementById("plansContent").style.display = "block";
        document.getElementById("scenariosContent").style.display = "none";
        document.getElementById("reportsContent").style.display = "none";

        //colour of div
        document.getElementById("integrations").style.color = "#a5a5a5";
        document.getElementById("modeling").style.color = "#a5a5a5";
        document.getElementById("plans").style.color = "#f2d166";
        document.getElementById("scenarios").style.color = "#a5a5a5";
        document.getElementById("reports").style.color = "#a5a5a5";

        document.getElementById("integrations").style.bottom = `247px`;
        document.getElementById("modeling").style.bottom = `218px`;
        document.getElementById("plans").style.position = "relative";
        document.getElementById("plans").style.bottom = `${scrollTop - 1696}px`;
      }
      if (scrollTop > 2000 && scrollTop < 2150) {
        document.getElementById("integrationsContent").style.display = "none";
        document.getElementById("modelingContent").style.display = "none";
        document.getElementById("plansContent").style.display = "none";
        document.getElementById("scenariosContent").style.display = "block";
        document.getElementById("reportsContent").style.display = "none";

        //colour of div
        document.getElementById("integrations").style.color = "#a5a5a5";
        document.getElementById("modeling").style.color = "#a5a5a5";
        document.getElementById("plans").style.color = "#a5a5a5";
        document.getElementById("scenarios").style.color = "#f2d166";
        document.getElementById("reports").style.color = "#a5a5a5";

        document.getElementById("integrations").style.bottom = `247px`;
        document.getElementById("modeling").style.bottom = `218px`;
        document.getElementById("plans").style.bottom = `195px`;
        document.getElementById("scenarios").style.position = "relative";
        document.getElementById("scenarios").style.bottom = `${
          scrollTop - 1985
        }px`;
      }
      if (scrollTop > 2150 && scrollTop < 2400) {
        console.log("last div", scrollTop - 2150);
        document.getElementById("integrationsContent").style.display = "none";
        document.getElementById("modelingContent").style.display = "none";
        document.getElementById("plansContent").style.display = "none";
        document.getElementById("scenariosContent").style.display = "none";
        document.getElementById("reportsContent").style.display = "block";

        //colour of div
        document.getElementById("integrations").style.color = "#a5a5a5";
        document.getElementById("modeling").style.color = "#a5a5a5";
        document.getElementById("plans").style.color = "#a5a5a5";
        document.getElementById("scenarios").style.color = "#a5a5a5";
        document.getElementById("reports").style.color = "#f2d166";

        //Postion of Div
        document.getElementById("integrations").style.bottom = `247px`;
        document.getElementById("modeling").style.bottom = `218px`;
        document.getElementById("plans").style.bottom = `195px`;
        document.getElementById("scenarios").style.bottom = `149.8px`;
        document.getElementById("reports").style.position = "relative";
        document.getElementById("reports").style.bottom = `${
          scrollTop - 2150
        }px`;
      }
    } else {
      document.getElementById("scroller").style.position = "relative";
      document.getElementById("scroller").style.left = "0%";
    }
    // console.log(scrollTop);
  }
  window.addEventListener("scroll", captureScrollPosition);
  return (
    <div id="scrollerupperDiv">
      {" "}
      <div id="scroller">
        <div id="leftscollerDiv">        
          <div id="integrations" onClick={integrations}>
            Integrations
          </div>
          <div id="modeling" onClick={modeling}>
            Modeling
          </div>
          <div id="plans" onClick={plans}>
            Plans
          </div>
          <div id="scenarios" onClick={scenarios}>
            {" "}
            Scenarios
          </div>
          <div id="reports" onClick={reports}>
            Reports
          </div>
        </div>
        <div id="rightscollerDiv">
          <div id="integrationsContent">Integrations</div>
          <div id="modelingContent">Modeling</div>
          <div id="plansContent">Plans</div>
          <div id="scenariosContent"> Scenarios</div>
          <div id="reportsContent">Reports</div>
        </div>
      </div>
    </div>
  );
}

export default Scroller;
