import React, { useRef, useState, useContext, useEffect } from 'react';
import { timer, removeTimer } from '../TimerHundler';
import ScrollBtns from "../fragments/ScrollBtns";
import LangContext from "../LangContext";

import '../css/App.css';

function TextInserterFront({ info, homeBtnLogic }) {

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

    const scrollAndUpdateDown = () => {

        resetTimer();
        textParaEl.current.scrollTop += 50;
    }

    const scrollAndUpdateUp = () => {

        textParaEl.current.scrollTop -= 50;
    }


    const position = {
        position: 'relative',
        float: 'right',
        bottom: '55px',
        left: '140px'
    }
    const positionHeb = {
        position: 'relative',
        float: 'left',
        bottom: '33px',
        right: '11%'
    }

    return (

        <div className={isRightToLeft ? 'front-text-container' : 'front-text-container-en'}>
            <div className='front-paragraph-container' onScroll={handleScroll}>
                <p ref={textParaEl} className={isRightToLeft ? 'textCss' : 'enTextCss'} id="particularTextBox" dangerouslySetInnerHTML={createMarkup(info.info)}>
                </p>
            </div>
            <ScrollBtns homeBtnLogic={homeBtnLogic} scrollDown={scrollAndUpdateDown} scrollUp={scrollAndUpdateUp} position={isRightToLeft ? positionHeb : position} />
        </div>
    );
}

export default TextInserterFront;
