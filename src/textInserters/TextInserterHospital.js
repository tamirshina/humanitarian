import React, { useRef, useState, useContext, useEffect } from 'react';
import { timer, removeTimer } from '../TimerHundler';
import scrollIcon from "../assets/scroll-icon.png";
import LangContext from "../LangContext";
import '../css/App.css';

function TextInserterParticular({ info, positionHeb, positionEn, homeBtnLogic }) {

    const { lang } = useContext(LangContext);
    const [isRightToLeft, setIsRightToLeft] = useState(false);
    const [isScrollDebounce, setIsScrollDebounce] = useState(true);
    const textParaEl = useRef(null);

    useEffect(() => {
        if (lang === "hebrew") {
            setIsRightToLeft(true);
        } else {
            setIsRightToLeft(false);
        }
    }, [lang]);

    function handleScroll() {
        if (isScrollDebounce) {
            setIsScrollDebounce(false);
            resetTimer();
            setTimeout(function () { setIsScrollDebounce(true); }, 2000);
        }
    }

    function resetTimer() {
        removeTimer();
        timer(homeBtnLogic);
    }

    function createMarkup(str) { return { __html: str } };

    const hebPosition = {
        position: "fixed",
        right: "34%",
        bottom: "9%"
    }

    const enPosition = {
        position: "fixed",
        right: "2%",
        bottom: "8%"
    }

    return (

        <div style={isRightToLeft ? positionHeb : positionEn} onScroll={handleScroll}>
            <p ref={textParaEl} className={isRightToLeft ? 'hospital-info-heb' : 'hospital-info-en'} id="particularTextBox" dangerouslySetInnerHTML={createMarkup(info.info)}>
            </p>
            <img src={scrollIcon} alt={'scroll-icon'} style={isRightToLeft ? hebPosition : enPosition} />
        </div>
    );
}

export default TextInserterParticular;
