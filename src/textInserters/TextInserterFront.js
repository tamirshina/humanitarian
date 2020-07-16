import React, { useRef, useState, useContext, useEffect } from 'react';
import { timer, removeTimer } from '../TimerHundler';
import scrollIcon from "../assets/scroll-icon.png";
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

    const position = {
        position: 'relative',
        float: 'right',
        bottom: '90px',
        left: '155px'
    }
    const positionHeb = {
        position: 'relative',
        float: 'left',
        bottom: '85px',
        right: '11%'
    }

    return (

        <div className={isRightToLeft ? 'front-text-container' : 'front-text-container-en'}>
            <div className='front-paragraph-container' onScroll={handleScroll}>
                <p ref={textParaEl} className={isRightToLeft ? 'textCss' : 'enTextCss'} id="particularTextBox" dangerouslySetInnerHTML={createMarkup(info.info)}>
                </p>
            </div>
            <img src={scrollIcon} alt={'scroll-icon'} style={isRightToLeft ? positionHeb : position} />
        </div>
    );
}

export default TextInserterFront;
