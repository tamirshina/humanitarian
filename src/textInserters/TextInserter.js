import React, { useRef, useState, useContext, useEffect } from 'react';
import { timer, removeTimer } from '../TimerHundler';
import scrollIcon from "../assets/scroll-icon.png";
import LangContext from "../LangContext";
import '../css/App.css';

function TextInserterParticular({ info, position, homeBtnLogic }) {

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

    function resetTimer() {
        removeTimer();
        timer(homeBtnLogic);
    }

    function handleScroll() {
        if (isScrollDebounce) {
            setIsScrollDebounce(false);
            resetTimer();
            setTimeout(function () { setIsScrollDebounce(true); }, 2000);
        }
    }

    function createMarkup(str) { return { __html: str } };

    const hebPosition = {
        position: "fixed",
        right: "11%",
        bottom: "20%"
    }

    return (

        <div className={isRightToLeft ? 'heb-school-text-container' : 'text-inserter-container'} onScroll={handleScroll}>
            <p ref={textParaEl} className={isRightToLeft ? 'school-info-heb' : 'text-particular'} id="particularTextBox" dangerouslySetInnerHTML={createMarkup(info.info)}>
            </p>
            <img src={scrollIcon} alt={'scroll-icon'} style={isRightToLeft ? hebPosition : position} />
        </div>
    );
}

export default TextInserterParticular;
