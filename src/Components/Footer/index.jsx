import React from "react";
import "./index.css";
function Footer() {
  return (
    <>
      <footer class="footer">
        <div
          style={{
            width: "100%",
            height: "40px",
            background: "#c4750f",
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
          }}
        ></div>
        <div
          style={{ width: "100%", height: "40px", background: "#de9400" }}
        ></div>
        <div
          style={{ width: "100%", height: "40px", background: "#ecb74f" }}
        ></div>
        <div class="top_header">
          <section>
            <span>
              <i class="fa fa-map-marker"></i>
            </span>
            <span>Street, full address, state/province, country, pincode</span>
          </section>
          <section>
            <span>
              <i class="fa fa-phone"></i>
            </span>
            <span>(+91) 5555556667</span>
          </section>
          <section>
            <span>
              <i class="fa fa-envelope"></i>
            </span>
            <span>info@fsd.com</span>
          </section>
        </div>
        <span class="border-shape"></span>
        <div class="bottom_content">
          <section>
            <a href="#">
              <i class="fa fa-facebook"></i>
            </a>
            <a href="#">
              <i class="fa fa-instagram"></i>
            </a>
            <a href="#">
              <i class="fa fa-twitter"></i>
            </a>
            <a href="#">
              <i class="fa fa-telegram"></i>
            </a>
          </section>
          <section>
            <a href="#">Home</a>
            <a href="#">About us</a>
            {/* <a href="#">Order</a>
    <a href="#">Retail</a>
    <a href="#">Member</a> */}
            <a href="#">Contact Us</a>
          </section>
        </div>
        <div class="copyright">
          Copyright © 2023 NIKADI - All rights reserved
        </div>
      </footer>
    </>
  );
}

export default Footer;
