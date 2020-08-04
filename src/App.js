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

  useEffect(() => {

    if (Date.now() > Date.parse('011/15/2020 12:00:00 AM')) {
      //start is less than End
      setIsNormallMode(false);
    }

    window.addEventListener("click", resetTimer);

    return () => {
      window.removeEventListener("click", resetTimer);
    };
    // eslint-disable-next-line
  }, []);

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
  }

  return (
    <>
      {isNormallMode ?
        <div>
          <LanguageDiv />
          {isFrontPage && <FrontPage moveToParticularInfo={moveToParticularInfo} />}
          {isHospitalPage && <HospitalPage homeBtnLogic={homeBtnLogic} />}
          {isDiseasesPage && <DiseasesPage homeBtnLogic={homeBtnLogic} />}
          {isSchoolPage && <SchoolPage homeBtnLogic={homeBtnLogic} />}
          {!isFrontPage && <HomeBtn homeBtnLogic={homeBtnLogic} />}
        </div>
        :
        <img src={errorImg} alt='error' className='full-background'></img>
      }
    </>

  );
}

export default App;
