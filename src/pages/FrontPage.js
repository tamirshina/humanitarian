import React, { useContext, useState, useEffect } from 'react';
import backgroundImg from '../assets/screen01/01_back.png';
import button1 from '../assets/screen01/button01.png';
import button2 from '../assets/screen01/button02.png';
import button3 from '../assets/screen01/button03.png';
import russianText from "../textInserters/RussianText";
import englishText from "../textInserters/EnglishText";
import hebrewText from "../textInserters/HebrewText";
import TextInserter from "../textInserters/TextInserterFront";
import LangContext from "../LangContext";

function FrontPage({ moveToParticularInfo }) {

    const { lang } = useContext(LangContext);
    const [isRightToLeft, setIsRightToLeft] = useState(false);

    useEffect(() => {
        if (lang === "hebrew") {
            setIsRightToLeft(true);
        } else {
            setIsRightToLeft(false);
        }
    }, [lang]);

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


    return (

        <>
            <img src={backgroundImg} alt='backgroundImage' className='full-background' />
            <div className='churchOne' id='school' onClick={moveToParticularInfo}>
                <span className='text-title-front-one'>{whichFileToUse().titles.school}</span>
                <img src={button1} alt='school' />
            </div>
            <div className='churchTwo' id='diseases' onClick={moveToParticularInfo}>
                <span className='text-title-front-two'>{whichFileToUse().titles.Diseases}</span>
                <img src={button2} alt='diseases' />
            </div>
            <div className='churchThree' id='hospital' onClick={moveToParticularInfo}>
                <span className='text-title-front-three'>{whichFileToUse().titles.hospital}</span>
                <img src={button3} alt='hospital' />
            </div>
            <TextInserter info={whichFileToUse().frontPage} />
        </>

    );
}

export default FrontPage;