import React from 'react'
import "./Team.css"
function Team() {
  return (
    <>
    <div  style={{display:"flex", justifyContent:"center", fontSize:"34px", marginTop:"20px", }}>
    <h1 style={{fontWeight:"bold", color:"#ffbe80", fontSize:"50px"}}>Our Team </h1>
    </div>
    <div id="ḥistory">
    <div id="Page1Content">
    </div>
    <div class="wrappers_div">
      <div class="cols">
        <div class="col" ontouchstart="this.classList.toggle('hover');">
          <div class="container">
            <div
              class="front"
            >
               <img style={{width:"105%", height:"100%  "}} src="https://unsplash.it/513/513/" alt="" />
              <div class="inner">
                <p>Team 1</p>
                <span>Lorem ipsum</span>
              </div>
            </div>
            <div class="back">
            <img src="https://unsplash.it/513/513/" alt="" />
              <div class="inner">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Alias cum repellat velit quae suscipit c.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col" ontouchstart="this.classList.toggle('hover');">
          <div class="container">
            <div
              class="front"
              // style="url)"
            >
              <img src="https://unsplash.it/513/513/" alt="" />
              <div class="inner">
                <p>Team 2</p>
                <span>Lorem ipsum</span>
              </div>
            </div>
            <div class="back">
              <img src="https://unsplash.it/513/513/" alt="" />
              <div class="inner">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Alias cum repellat velit quae suscipit c.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col" ontouchstart="this.classList.toggle('hover');">
          <div class="container">
            <div
              class="front"
              // style="background-image: url(https://unsplash.it/502/502/)"
            >
              <img src="https://unsplash.it/513/513/" alt="" />
              <div class="inner">
                <p>Team 3</p>
                <span>Lorem ipsum</span>
              </div>
            </div>
            <div class="back">
              <img src="https://unsplash.it/513/513/" alt="" />
              <div class="inner">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Alias cum repellat velit quae suscipit c.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col" ontouchstart="this.classList.toggle('hover');">
          <div class="container">
            <div
              class="front"
              // style="background-image: url(https://unsplash.it/503/503/)"
            >
              <img src="https://unsplash.it/513/513/" alt="" />
              <div class="inner">
                <p>Team 4</p>
                <span>Lorem ipsum</span>
              </div>
            </div>
            <div class="back">
              <img src="https://unsplash.it/513/513/" alt="" />
              <div class="inner">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Alias cum repellat velit quae suscipit c.
                </p>
              </div>
            </div>
          </div>
        </div>
    
      </div>
    </div>
  </div>
  </>
  )
}

export default Team
