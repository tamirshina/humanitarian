import React, { useState } from 'react';
import './css/App.css';
import FrontPage from './pages/FrontPage';
import DiseasesPage from './pages/DiseasesPage';
import LanguageDiv from './fragments/LanguageButtons';
import HospitalPage from './pages/HospitalPage';
import SchoolPage from './pages/HospitalPage';

function App() {

  const [isFrontPage, setIsFrontPage] = useState(true);
  const [isHospitalPage, setIsHospitalPage] = useState(false);
  const [isDiseasesPage, setIsDiseasesPage] = useState(false);
  const [isSchoolPage, setIsSchoolPage] = useState(false);


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
  const homeBtn = () => {
    setIsFrontPage(true);
    setIsHospitalPage(false);
    setIsDiseasesPage(false);
    setIsSchoolPage(false);
  }

  return (
    <>
      <LanguageDiv />
      {isFrontPage && <FrontPage moveToParticularInfo={moveToParticularInfo} />}
      {isHospitalPage && <HospitalPage homeBtnLogic={homeBtn} />}
      {isDiseasesPage && <DiseasesPage homeBtnLogic={homeBtn} />}
      {isSchoolPage && <SchoolPage homeBtnLogic={homeBtn} />}
    </>
  );
}

export default App;
