import React, { useContext, useState, useEffect } from 'react';
import backgroundImg from '../assets/opening-screen/background_new.png'
import textBox from '../assets/opening-screen/frornPageTextBox.png';
import russianText from "../textInserters/RussianText";
import englishText from "../textInserters/EnglishText";
import hebrewText from "../textInserters/HebrewText";
import TextInserter from "../textInserters/TextInserterFront";
import LangContext from "../LangContext";

function FrontPage({ moveToParticularInfo }) {

    const { lang } = useContext(LangContext);
    const [isRightToLeft, setIsRightToLeft] = useState(false);
    const [isShowText, setIsShowText] = useState(false);

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
    const opentextbox = () => {

        isShowText ? setIsShowText(false) : setIsShowText(true);
    }

    return (

        <>
            <img src={backgroundImg} alt='backgroundImage' className='full-background' />
            <div className='title-box-size title-box-one' id='school' onClick={moveToParticularInfo}>
                <div className='text-box'>
                    <h4 className='title-small-front'>{whichFileToUse().titles.school}</h4>
                </div>
            </div>
            <div className='title-box-size title-box-two' id='diseases' onClick={moveToParticularInfo}>
                <div className='text-box'>
                    <h4 className='title-small-front'>{whichFileToUse().titles.Diseases}</h4>
                </div>
            </div>
            <div className='title-box-size title-box-three' id='hospital' onClick={moveToParticularInfo}>
                <div className={isRightToLeft ? 'text-box' : 'text-box small-leftLang-front'} >
                    <h4 className='title-small-front'>{whichFileToUse().titles.hospital}</h4>
                </div>
            </div>
            <div className='title-box-size title-box-four' style={whichFileToUse().titles.cssAdjust} id='humanitarian' onClick={opentextbox}>
                <div className={isRightToLeft ? 'text-box' : 'text-box small-leftLang-front'} >
                    <h4 className='title-small-front'>{whichFileToUse().titles.frontPage}</h4>
                </div>
            </div>
            {isShowText && <div>
                <TextInserter info={whichFileToUse().frontPage} />
                <img src={textBox} alt='text box' className='front-page-text-box' />
            </div>}
        </>

    );
}

export default FrontPage;