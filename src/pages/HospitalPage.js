import React, { useEffect, useState, useContext } from 'react';
import LangContext from "../LangContext";
import backgroundEn from '../assets/hospital/04_background_HEB.png';
import backgroundHeb from '../assets/hospital/04_background_HEB.png';
import TextInserter from '../textInserters/TextInserter';
import russianText from "../textInserters/RussianText";
import englishText from "../textInserters/EnglishText";
import hebrewText from "../textInserters/HebrewText";
import { timer, removeTimer } from '../TimerHundler';
import '../css/App.css';
import HomeBtn from '../fragments/HomeBtn';
import ScrollBtns from '../fragments/ScrollBtns';

function HospitalPage({ homeBtnLogic }) {

    const { lang } = useContext(LangContext);
    const [isRightToLeft, setIsRightToLeft] = useState(false);

    useEffect(() => {
        timer(homeBtnLogic);
        if (lang === "hebrew") {
            setIsRightToLeft(true);
        } else {
            setIsRightToLeft(false);
        }
        return () => { // Return callback to run on unmount.
            removeTimer();
        };

    }, [homeBtnLogic, lang]);

    function whichFileToUse() {
        if (lang === "hebrew") {
            return hebrewText;
        }
        if (lang === "english") {
            return englishText;
        } else {
            return russianText;
        }
    }

    const position = {

    }



    return (
        <>
            <img src={isRightToLeft ? backgroundHeb : backgroundEn} alt='backgroundImage' className='particularBackGround'></img>
            <ScrollBtns />
            <HomeBtn homeBtnLogic={homeBtnLogic} />
            <TextInserter info={whichFileToUse().hospital} position={position} />
        </>

    );

}

export default HospitalPage;
