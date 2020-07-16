import React, { useEffect, useState, useContext } from 'react';
import LangContext from "../LangContext";
import backgroundEn from '../assets/hospital/04_background_HEB.png';
import backgroundHeb from '../assets/hospital/04_background_HEB.png';
import textBox from '../assets/hospital/text-box.png';
import TextInserter from '../textInserters/TextInserterHospital';
import russianText from "../textInserters/RussianText";
import englishText from "../textInserters/EnglishText";
import hebrewText from "../textInserters/HebrewText";
import { timer, removeTimer } from '../TimerHundler';
import '../css/App.css';

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

    const positionHeb = {
        position: 'fixed',
        top: '5%',
        right: '4%',
        width: '650px'
    }
    const positionEn = {
        position: 'fixed',
        top: '5%',
        left: '61%',
        width: '650px'
    }



    return (
        <>
            <img src={isRightToLeft ? backgroundHeb : backgroundEn} alt='backgroundImage' className='particularBackGround'></img>
            <div>
                <img src={textBox} alt='bacground' className='hospital-text-background' />
                <TextInserter info={whichFileToUse().hospital} positionHeb={positionHeb} positionEn={positionEn} />
            </div>
        </>

    );

}

export default HospitalPage;
