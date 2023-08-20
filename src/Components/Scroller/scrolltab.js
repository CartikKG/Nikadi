import React, { useEffect, useRef, useState } from "react";
import ScrollItem from "./scrollItem";
const data = [

    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSMHUyePr4dURgwoFrw_H9610UPX_pQP189w&usqp=CAU", title: "Attachments" },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSamtxgZNz2i8ard2u3K-Y40lWYgcFIO61XZw&usqp=CAU", title: "comments" },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUMgO-kzyaCLQwBLm6_QQ-Yjyxlike_jMIlA&usqp=CAU", title: "Activity" },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq7i5AifBfxkiAINPQnX2q-NwOzsHPd-Swzg&usqp=CAU", title: "Relationship" },
    { src: "https://www.smartsheet.com/sites/default/files/2022-12/IC-Web-Analytics-Marketing-Dashboard-Template.png", title: "Associations" },
    // { src: "", title: "Heading 1" },
    // { src: "", title: "Heading 1" },
];

const ScrollTab = () => {
    const elementRef = useRef(null);
    const [position, setPosition] = useState({ top: "", bottom: "" });
    const [positionState, setPositionState] = useState(false);
    const [showState, setShowState] = useState(data[0]);
    const [showStaterow, setShowStaterow] = useState(0);

    const handleScroll = () => {
        const { top, bottom } = elementRef.current.getBoundingClientRect();
        console.log("object",top)
        if (top < 1) {
            setPositionState(true);
        }
        if (top < -700) {
            setPositionState(false);
        }
        else if (top < -500) {
            setShowState(data[4]);
            setShowStaterow(4);
        } else if (top < -400) {
            setShowState(data[3]);
            setShowStaterow(3);
        } else if (top < -300) {
            setShowState(data[2]);
            setShowStaterow(2);
        } else if (top < -200) {
            setShowState(data[1]);
            setShowStaterow(1);
        } else if (top < -100) {
            setShowState(data[0]);
            setShowStaterow(0);
        }
        setPosition({ top, bottom });
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const { top, bottom } = position;
    console.log({ top, bottom });

    return (
        <div>
            {/* <div style={{ width: "100%", height: "100vh", background: "grey" }}></div> */}
            <div
                ref={elementRef}
                style={{
                    height: "300px",
                    background: "red",
                    position: "relative",
                    padding: "10px",
                }}
            >
                <div
                    style={{ position: positionState ? "fixed" : "initial", top: "10px", padding: "20px 100px", width: "100%" }}
                >
                    <ScrollItem
                        showState={showState}
                        data={data}
                        showStaterow={showStaterow}
                    />
                </div>
            </div>
            {/* <div style={{ width: "100%", height: "500vh", background: "grey" }}></div> */}
        </div>
    );
};

export default ScrollTab;
