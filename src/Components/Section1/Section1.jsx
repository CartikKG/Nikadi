import React from "react";
import "./Section1.css"
function Section1() {
  return (
    <>
      <section id="services">
        <h1 class="sec-heading">What Nikadi Does</h1>
        <ul>
          <li>
            <div>
              {/* <a href=""> */}
                <i class="fas fa-laptop"></i>
                <span>Stratagy and Consultant</span>
              {/* </a> */}
            </div>
          </li>
          <li>
            <div>
              {/* <a href=""> */}
                <i class="fas fa-users"></i>
                <span>User Experience Design</span>
              {/* </a> */}
            </div>
          </li>
          <li>
            <div>
              {/* <a href=""> */}
                <i class="fas fa-mobile-alt"></i>
                <span>Mobile App Development</span>
              {/* </a> */}
            </div>
          </li>
          <li>
            <div>
              {/* <a href=""> */}
                <i class="fab fa-chrome"></i>
                <span>Web App Development</span>
              {/* </a> */}
            </div>
          </li>
          <li>
            <div>
              {/* <a href=""> */}
                <i class="fas fa-ribbon"></i>
                <span>Quality Analysis and Testing</span>
              {/* </a> */}
            </div>
          </li>
          {/* <li> */}
            {/* <div>
              // <a href="">
                <i class="fas fa-ticket-alt"></i>
                <span>Application Management & Support</span>
              // </a>
            </div> */}
          {/* </li> */}
        </ul>
      </section>
    </>
  );
}

export default Section1;
