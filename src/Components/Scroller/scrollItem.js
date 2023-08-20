import React, { useState } from "react";

const ScrollItem = ({ showState, data, showStaterow }) => {
  return (
    <div
      style={{ display: "grid", gridTemplateColumns: "30% 70%", gap: "20px" }}
    >
      <div style={{ background: "black", borderRadius: "10px" }}>
        {data.map((ele, index) => (
          <div style={{ width: "80%", display: "flex", justifyContent: "center", alignItems: "flex-start", flexDirection: "column", margin: "20px" }}>
            <div
              style={{
                fontSize: "21px",
                fontWeight: "600",
                lineHeight: "16px",
                textTransform: "capitalize",
                color: "#fff",
              }}
            >
              {ele.title}
            </div>
            {showStaterow === index ? (
              <div style={{ display: "flex", alignItems: "flex-start", flexDirection: "column" }}>
                <p style={{
                  fontSize: "21px",
                  fontWeight: "600",
                  lineHeight: "21px",
                  textTransform: "capitalize",
                  color: "orange",
                  textAlign: "left"
                }} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, architecto.</p>
                <h1
                  style={{
                    fontSize: "21px",
                    fontWeight: "600",
                    lineHeight: "16px",
                    textTransform: "capitalize",
                    color: "#fff",
                  }}
                >
                  {ele.title}
                </h1>
              </div>
            ) : (
              <></>
            )}
          </div>
        ))}
      </div>
      <div
        style={{
          background: "grey",
          borderRadius: "10px",
          fontSize: "16px",
          fontWeight: "600",
          lineHeight: "16px",
          textTransform: "capitalize",
          color: "#fff",
        }}
      >
        {showState.title}
        <img
          style={{ width: "100%", height: "100%" }}
          src={showState.src}
          alt=""
          srcset=""
        />
      </div>
    </div>
  );
};

export default ScrollItem;
