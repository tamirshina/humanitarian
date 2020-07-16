import React from "react";
import scrollUpImg from "../assets/UP.png";
import scrollDwonImg from "../assets/Down.png";
import "../css/App.css";

function ScrollingBtn({ scrollDown, scrollUp, position }) {


    return (
        <div style={position}>
            <img
                src={scrollUpImg}
                alt="scroll-up"
                onClick={scrollUp}
            />
            <img src={scrollDwonImg} alt="scroll-up" onClick={scrollDown} className='right-scroll-btn' />
        </ div>
    );
}

export default ScrollingBtn;
