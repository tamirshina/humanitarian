import React, { useEffect, useState, useContext } from "react";
import scrollUpImg from "../assets/UP.png";
import scrollDwonImg from "../assets/Down.png";
import LangContext from "../LangContext";
import "../css/App.css";

function ScrollingBtn({ scrollDown, scrollUp, position }) {

    const { lang } = useContext(LangContext);
    const [isRightToLeft, setIsRightToLeft] = useState(false);

    useEffect(() => {
        if (lang === "hebrew") {
            setIsRightToLeft(true);
        } else {
            setIsRightToLeft(false);
        }
    }, [lang]);


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
