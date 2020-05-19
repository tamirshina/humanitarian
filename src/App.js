import React, { useState } from 'react';
import FrontPage from './pages/FrontPage';
import IsraelPage from './pages/IsraelPage';
import HomeBtn from './fragments/HomeBtn';
import LanguageButtons from './fragments/LanguageButtons';
import './App.css';
import JerusalemPage from './pages/JerusalemPage';

function App() {

  const [isFrontPage, setIstFrontPage] = useState(true);
  const [isIsraelPage, setIstIsraelPage] = useState(false);
  const [isJerusalemPage, setIsJerusalemPage] = useState(false);


  const homeBtnLogic = () => {

    setIstFrontPage(true);
    setIstIsraelPage(false);
  }
  const playVideo = () => {

    const videoElem = document.getElementById("zoomInVideo");
    const frontText = document.getElementById("frontPageText");
    if (videoElem) {
      videoElem.play();
      videoElem.onplay = (event) => {
        if (frontText) {
          frontText.classList.add("fade");
        }
        setTimeout(function () {
          setIstIsraelPage(true);
        }, 3500);
      };
      videoElem.onended = (event) => {
        setIstFrontPage(false);
      };
    }
  };
  const playIsraelVideo = () => {

    const videoElem = document.getElementById("israelPageVideo");
    const elemntToFade = document.getElementsByClassName("container-to-fade");
    if (videoElem) {
      videoElem.play();
      videoElem.onplay = (event) => {
        elemntToFade[0].classList.add("fade");
        elemntToFade[1].classList.add("fade");
        setTimeout(function () {
          setIsJerusalemPage(true);
        }, 2500);
      };
      videoElem.onended = (event) => {
        setIstIsraelPage(false);
      };
    }
  };

  const backToIsraelPage = () => {

    setIstIsraelPage(true);
    setIsJerusalemPage(false);
  }


  return (
    <>
      {isFrontPage && <FrontPage playVideo={playVideo} />}
      {isIsraelPage && <IsraelPage playIsraelVideo={playIsraelVideo} />}
      {isJerusalemPage && <JerusalemPage homeBtnLogic={homeBtnLogic} backToIsraelPage={backToIsraelPage} />}
      {!isFrontPage && <HomeBtn homeBtnLogic={homeBtnLogic} />}
      <LanguageButtons />
    </>
  );
}

export default App;
