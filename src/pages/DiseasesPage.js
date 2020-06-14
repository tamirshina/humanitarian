import React, { useEffect, useContext, useState, useRef } from 'react';
import { timer, removeTimer } from '../TimerHundler';
import backgroundEn from '../assets/screen03/03-background_ENG.png';
import backgroundHeb from '../assets/screen03/03-background_HEB.png';
import russianText from "../textInserters/RussianText";
import englishText from "../textInserters/EnglishText";
import hebrewText from "../textInserters/HebrewText";
import HomeBtn from "../fragments/HomeBtn";
import LangContext from "../LangContext";
import ScrollBtns from '../fragments/ScrollBtns';
import headerUnderline from '../assets/10-HeaderunderlineEn.png';
import '../css/App.css';

function ParticularInfoPage({ homeBtnLogic }) {

  const { lang } = useContext(LangContext);
  const [isRightToLeft, setIsRightToLeft] = useState(false);
  const textParaEl = useRef(null);

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

  function resetTimer() {
    removeTimer();
    timer(homeBtnLogic);
  }
  const scrollAndUpdateDown = () => {

    resetTimer();
    textParaEl.current.scrollTop += 10;
  }

  const scrollAndUpdateUp = () => {

    textParaEl.current.scrollTop -= 10;
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
  function createMarkup(str) { return { __html: str } };

  const info = whichFileToUse().Diseases;
  const position = {
    position: "fixed",
    left: "40%",
    bottom: "5%"
  }
  const hebPosition = {
    position: "fixed",
    right: "40%",
    bottom: "5%"
  }

  return (
    <>
      <img src={isRightToLeft ? backgroundHeb : backgroundEn} alt='backgroundImage' className='particularBackGround'></img>
      <div ref={textParaEl} className={
        isRightToLeft
          ? "item-container-heb"
          : "item-container"
      }>
        <div className='diseases-title-container'>
          <div>{info.title}</div>
          <img
            src={headerUnderline}
            alt="someImage"
            className="image-for-imageText"
          />
        </div>
        {info.book.map((item) => {
          return (
            <div
              key={item.id}
              className={
                isRightToLeft
                  ? "item-container-small-heb"
                  : "item-container-small"
              }
            >
              <span>{item.title}</span>
              <img
                src={headerUnderline}
                alt="someImage"
                className="image-for-imageText"
              />
              <p
                dangerouslySetInnerHTML={createMarkup(item.info)}
                className={isRightToLeft ? "heb-heads-text" : "heads-text"}
              ></p>
            </div>
          );
        })}
      </div>
      <ScrollBtns scrollDown={scrollAndUpdateDown} scrollUp={scrollAndUpdateUp} position={isRightToLeft ? hebPosition : position} />
      <HomeBtn homeBtnLogic={homeBtnLogic} />
    </>

  );

}

export default ParticularInfoPage;
