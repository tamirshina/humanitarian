import React, { useContext } from 'react';
import LangContext from '../LangContext';
import englishBtn from '../assets/33-ENG.png';
import hebrewBtn from '../assets/34-HEB.png';
import russianBtn from '../assets/36-RUS.png';
import '../css/App.css';


function LanguageButtons() {

  const { switchLang } = useContext(LangContext);

  return (
    <div id='languagesBtnsDiv' className='languagesDiv'>

      <img src={hebrewBtn} alt='hebrewBtn' onClick={() => { switchLang("hebrew"); }} className='addMargin' />

      <img src={russianBtn} alt='russianBtn' onClick={() => { switchLang("russian"); }} className='addMargin' />

      <img src={englishBtn} alt='englishBtn' onClick={() => { switchLang("english"); }} className='addMargin' />

    </div>

  );
}

export default LanguageButtons;