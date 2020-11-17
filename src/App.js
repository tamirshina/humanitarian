import React, { useState, useEffect } from 'react';
import './css/App.css';
import { timer, removeTimer } from "./TimerHundler";
import errorImg from './assets/errorImg.png';
import FrontPage from './pages/FrontPage';
import DiseasesPage from './pages/DiseasesPage';
import LanguageDiv from './fragments/LanguageButtons';
import HospitalPage from './pages/HospitalPage';
import SchoolPage from './pages/SchoolPage';
import HomeBtn from './fragments/HomeBtn';

function App() {

  const [isFrontPage, setIsFrontPage] = useState(true);
  const [isHospitalPage, setIsHospitalPage] = useState(false);
  const [isDiseasesPage, setIsDiseasesPage] = useState(false);
  const [isSchoolPage, setIsSchoolPage] = useState(false);
  const [isNormallMode, setIsNormallMode] = useState(true);
  const [isShowText, setIsShowText] = useState(false);

  useEffect(() => {

    window.addEventListener("click", resetTimer);
    window.addEventListener('contextmenu', blockContextMenu);
    return () => {
      window.removeEventListener("click", resetTimer);
    };
    // eslint-disable-next-line
  }, []);

  const blockContextMenu = (evt) => {
    evt.preventDefault();
  };

  const resetTimer = () => {
    removeTimer();
    timer(homeBtnLogic);
  };

  const moveToParticularInfo = (e) => {

    if (e) {
      switch (e.currentTarget.id) {
        case "hospital":
          setIsHospitalPage(true);
          setIsFrontPage(false);
          break;
        case "school":
          setIsSchoolPage(true);
          setIsFrontPage(false);
          break;
        case "diseases":
          setIsDiseasesPage(true);
          setIsFrontPage(false);
          break;
        default:
          setIsFrontPage(true);
          break;
      }
    }
  }
  const homeBtnLogic = () => {
    setIsFrontPage(true);
    setIsHospitalPage(false);
    setIsDiseasesPage(false);
    setIsSchoolPage(false);
    setIsShowText(false);
  }

  const opentextbox = () => {

    isShowText ? setIsShowText(false) : setIsShowText(true);
  }

  return (
    <>
        <div>
          <LanguageDiv />
          {isFrontPage && <FrontPage moveToParticularInfo={moveToParticularInfo} isShowText={isShowText} opentextbox={opentextbox} />}
          {isHospitalPage && <HospitalPage homeBtnLogic={homeBtnLogic} />}
          {isDiseasesPage && <DiseasesPage homeBtnLogic={homeBtnLogic} />}
          {isSchoolPage && <SchoolPage homeBtnLogic={homeBtnLogic} />}
          {!isFrontPage && <HomeBtn homeBtnLogic={homeBtnLogic} />}
        </div>
    </>

  );
}

export default App;
