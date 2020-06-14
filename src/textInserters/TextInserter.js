import React, { useRef, useState, useContext, useEffect } from 'react';
import { timer, removeTimer } from '../TimerHundler';
import ScrollBtns from "../fragments/ScrollBtns";
import LangContext from "../LangContext";
import '../css/App.css';

function TextInserterParticular({ info, position, homeBtnLogic }) {

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
    const hebPosition = {
        position: "fixed",
        right: "11%",
        bottom: "20%"
    }

    return (

        <div className={isRightToLeft ? 'heb-school-text-container' : 'text-inserter-container'}>
            <p ref={textParaEl} className={isRightToLeft ? 'school-info-heb' : 'text-particular'} id="particularTextBox" dangerouslySetInnerHTML={createMarkup(info.info)}>
            </p>
            <ScrollBtns homeBtnLogic={homeBtnLogic} scrollDown={scrollAndUpdateDown} scrollUp={scrollAndUpdateUp} position={isRightToLeft ? hebPosition : position} />
        </div>
    );
}

export default TextInserterParticular;
