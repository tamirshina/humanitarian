import React, { useContext, useState, useEffect } from 'react';
import backgroundImg from '../assets/opening-screen/background_new.png'
import button1 from '../assets/screen01/button01.png';
import button2 from '../assets/screen01/button02.png';
import button3 from '../assets/screen01/button03.png';
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
            <div className='title-box-one' id='school' onClick={moveToParticularInfo}>
                <div className='containerBox'>
                    <div style={{ left: "-7px" }} className='text-box'>
                        <h4 className='title-small-front'>{whichFileToUse().titles.school}</h4>
                    </div>
                    <img className='my-img' src={button1} alt='school' />
                </div>
            </div>
            <div className='title-box-two' id='diseases' onClick={moveToParticularInfo}>
                <div className='containerBox'>
                    <div style={{ left: "13px" }} className='text-box'>
                        <h4 className='title-small-front'>{whichFileToUse().titles.Diseases}</h4>
                    </div>
                    <img className='my-img' src={button2} alt='school' />
                </div>
            </div>
            <div className='title-box-three' id='hospital' onClick={moveToParticularInfo}>
                <div className='containerBox'>
                    <div className={isRightToLeft ? 'text-box' : 'text-box small-leftLang-front'} >
                        <h4 className='title-small-front'>{whichFileToUse().titles.hospital}</h4>
                    </div>
                    <img className='my-img' src={button3} alt='school' />
                </div>
            </div>
            <div className='title-box-four' style={whichFileToUse().titles.cssAdjust} id='humanitarian' onClick={opentextbox}>
                <div className='containerBox'>
                    <div className={isRightToLeft ? 'text-box' : 'text-box small-leftLang-front'} >
                        <h4 className='title-small-front'>{whichFileToUse().titles.frontPage}</h4>
                    </div>
                    <img className='my-img' src={button3} alt='school' />
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