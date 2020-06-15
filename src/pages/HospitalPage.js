import React, { useEffect, useState, useContext } from 'react';
import LangContext from "../LangContext";
import backgroundEn from '../assets/hospital/04_background_HEB.png';
import backgroundHeb from '../assets/hospital/04_background_HEB.png';
import cloudImg from '../assets/hospital/hand.png';
import handImg from '../assets/hospital/hand.png';
import textBox from '../assets/hospital/text-box.png';
import textBoxEn from '../assets/hospital/text-box-en.png';
import TextInserter from '../textInserters/TextInserterHospital';
import russianText from "../textInserters/RussianText";
import englishText from "../textInserters/EnglishText";
import hebrewText from "../textInserters/HebrewText";
import { timer, removeTimer } from '../TimerHundler';
import '../css/App.css';
import HomeBtn from '../fragments/HomeBtn';

function HospitalPage({ homeBtnLogic }) {

    const { lang } = useContext(LangContext);
    const [isRightToLeft, setIsRightToLeft] = useState(false);
    const [isPageClicked, setIsPageClicked] = useState(false);

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

    function handleHandClick() {
        setIsPageClicked(true);
    }
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
        left: '5%',
        width: '650px'
    }



    return (
        <>
            <img src={isRightToLeft ? backgroundHeb : backgroundEn} alt='backgroundImage' className='particularBackGround'></img>
            {!isPageClicked && <div className='hospital-click-container'>
                <img src={cloudImg} alt='cloud' onClick={handleHandClick} className='hospital-cloud' />
                <img src={handImg} alt='hand' onClick={handleHandClick} className='hospital-hand' />
            </div>}
            <HomeBtn homeBtnLogic={homeBtnLogic} />
            {isPageClicked && <div>
                <img src={isRightToLeft ? textBox : textBoxEn} alt='bacground' className={isRightToLeft ? 'hospital-text-background' : 'hospital-text-background-en'} />
                <TextInserter info={whichFileToUse().hospital} positionHeb={positionHeb} positionEn={positionEn} />
            </div>}
        </>

    );

}

export default HospitalPage;
