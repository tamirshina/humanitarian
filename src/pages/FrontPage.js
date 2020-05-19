import React, { useContext, useState, useEffect } from 'react';
import backgroundImg from '../assets/screen01/01_back.png';
import button1 from '../assets/screen01/button01.png';
import button2 from '../assets/screen01/button02.png';
import button3 from '../assets/screen01/button03.png';
import russianText from "../textInserters/RussianText";
import englishText from "../textInserters/EnglishText";
import hebrewText from "../textInserters/HebrewText";
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
            <div>
                <span>{whichFileToUse().titles.school}</span>
                <img src={button1} onClick={moveToParticularInfo} id='school' alt='school' className='churchFront churchOne' />
            </div>
            <div>
                <span>{whichFileToUse().titles.diseases}</span>
                <img src={button2} onClick={moveToParticularInfo} id='diseases' alt='diseases' className='churchFront churchTwo' />
            </div>
            <div>
                <span>{whichFileToUse().titles.hospital}</span>
                <img src={button3} onClick={moveToParticularInfo} id='hospital' alt='hospital' className='churchFront churchThree' />
            </div>
        </>

    );
}

export default FrontPage;