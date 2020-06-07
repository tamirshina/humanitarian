import React, { useRef, useState, useContext, useEffect } from 'react';
import headerUnderline from '../assets/10-HeaderunderlineEn.png';
import { timer, removeTimer } from '../TimerHundler';
import ScrollBtns from "../fragments/ScrollBtns";
import LangContext from "../LangContext";
import '../css/App.css';

function TextInserterFront({ info, homeBtnLogic }) {

    const { lang } = useContext(LangContext);
    const [isRightToLeft, setIsRightToLeft] = useState(false);
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

    function createMarkup(str) { return { __html: str } };

    const scrollAndUpdateDown = () => {

        resetTimer();
        textParaEl.current.scrollTop += 10;
    }

    const scrollAndUpdateUp = () => {

        textParaEl.current.scrollTop -= 10;
    }

    return (

        <div className='front-text-container'>
            <div className='front-info-title'>
                <div className='title-text-front'>{info.title}</div>
                <img alt='underline' src={headerUnderline} className='frontPageUnderline' />
            </div>
            <div className='front-paragraph-container'>
                <p ref={textParaEl} className={isRightToLeft ? 'infoEnText' : 'textCss'} id="particularTextBox" dangerouslySetInnerHTML={createMarkup(info.info)}>
                </p>
            </div>
            <ScrollBtns homeBtnLogic={homeBtnLogic} scrollDown={scrollAndUpdateDown} scrollUp={scrollAndUpdateUp} />
        </div>
    );
}

export default TextInserterFront;
