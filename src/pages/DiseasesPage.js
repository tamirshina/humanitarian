import React, { useEffect, useContext, useState, useRef } from 'react';
import { timer, removeTimer } from '../TimerHundler';
import backgroundEn from '../assets/screen03/03-background_ENG.png';
import backgroundHeb from '../assets/screen03/03-background_HEB.png';
import russianText from "../textInserters/RussianText";
import englishText from "../textInserters/EnglishText";
import hebrewText from "../textInserters/HebrewText";
import LangContext from "../LangContext";
import scrollIcon from "../assets/scroll-icon.png";
import headerUnderline from '../assets/10-HeaderunderlineEn.png';
import hebHeaderUnderline from '../assets/10_Headerunderline.png';
import '../css/App.css';

function ParticularInfoPage({ homeBtnLogic }) {

  const { lang } = useContext(LangContext);
  const [isRightToLeft, setIsRightToLeft] = useState(false);
  const [isScrollDebounce, setIsScrollDebounce] = useState(true);
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

  function handleScroll() {
    if (isScrollDebounce) {
      setIsScrollDebounce(false);
      resetTimer();
      setTimeout(function () { setIsScrollDebounce(true); }, 2000);
    }
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
    left: "47%",
    bottom: "5%"
  }
  const hebPosition = {
    position: "fixed",
    right: "47%",
    bottom: "5%"
  }

  return (
    <>
      <img src={isRightToLeft ? backgroundHeb : backgroundEn} alt='backgroundImage' className='particularBackGround'></img>
      <div ref={textParaEl}
        onScroll={handleScroll}
        className={
          isRightToLeft
            ? "item-container-heb"
            : "item-container"
        }>
        <div className='diseases-title-container'>
          <div>{info.title}</div>
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
              <span className='diseases-small-title' >{item.title}</span>
              <img
                src={isRightToLeft ? hebHeaderUnderline : headerUnderline}
                alt="someImage"
                className="small-title-underline"
              />
              <p
                dangerouslySetInnerHTML={createMarkup(item.info)}
                className={isRightToLeft ? "heb-heads-text" : "heads-text"}
              ></p>
            </div>
          );
        })}
      </div>
      <img src={scrollIcon} alt={'scroll-icon'} style={isRightToLeft ? hebPosition : position} />
    </>

  );

}

export default ParticularInfoPage;
