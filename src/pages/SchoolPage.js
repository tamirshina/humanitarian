import React, { useEffect, useState, useContext } from 'react';
import LangContext from "../LangContext";
import backgroundEn from '../assets/background-EN.png';
import backgroundHeb from '../assets/background-HEB.png';
import russianText from "../textInserters/RussianText";
import englishText from "../textInserters/EnglishText";
import hebrewText from "../textInserters/HebrewText";
import TextInserter from '../textInserters/TextInserter';
import { removeTimer } from '../TimerHundler';
import '../css/App.css';
import HomeBtn from '../fragments/HomeBtn';

function SchoolPage({ homeBtnLogic }) {

      const { lang } = useContext(LangContext);
      const [isRightToLeft, setIsRightToLeft] = useState(false);

      useEffect(() => {
            if (lang === "hebrew") {
                  setIsRightToLeft(true);
            } else {
                  setIsRightToLeft(false);
            }
            return () => { // Return callback to run on unmount.
                  removeTimer();
            };


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

      const position = {

            position: "fixed",
            bottom: "20%",
            left: "11%"
      }


      return (
            <>
                  <img src={isRightToLeft ? backgroundHeb : backgroundEn} alt='backgroundImage' className='particularBackGround'></img>
                  <HomeBtn homeBtnLogic={homeBtnLogic} />
                  <TextInserter info={whichFileToUse().school} position={position} />
            </>

      );

}

export default SchoolPage;
