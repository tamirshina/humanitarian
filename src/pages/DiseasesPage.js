import React, { useEffect, useContext, useState } from 'react';
import { timer, removeTimer } from '../TimerHundler';
import backgroundEn from '../assets/screen03/03-background_ENG.png';
import backgroundHeb from '../assets/screen03/03-background_HEB.png';
import russianText from "../textInserters/RussianText";
import englishText from "../textInserters/EnglishText";
import hebrewText from "../textInserters/HebrewText";
import TextInserter from "../textInserters/TextInserter";
import HomeBtn from "../fragments/HomeBtn";
import LangContext from "../LangContext";
import ScrollBtns from '../fragments/ScrollBtns';
import '../css/App.css';

function ParticularInfoPage({ homeBtnLogic }) {

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
  const info = whichFileToUse.Diseases;
  const position = {

  }

  return (
    <>
      <img src={isRightToLeft ? backgroundHeb : backgroundEn} alt='backgroundImage' className='particularBackGround'></img>
      <ScrollBtns />
      <HomeBtn homeBtnLogic={homeBtnLogic} />
      <TextInserter Info={info} position={position} />
    </>

  );

}

export default ParticularInfoPage;
