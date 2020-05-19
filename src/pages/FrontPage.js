import React, { useContext, useEffect, useState, useRef } from "react";
import backgroundEn from "../assets/01-back-ENG.png";
import backgroundHeb from "../assets/02-back-HEB.png";
import videoHeb from "../assets/05-first-transion-heb.mp4";
import videoEn from "../assets/04-first-transition-en.mp4";
import LangContext from "../LangContext";
import hebHandArrow from "../assets/Arrow-HEB.png";
import enHandArrow from "../assets/06-Arrow-ENG.png";
import mapCircle from "../assets/03-map-circle.png";
import "../App.css";
import TextInserter from "../texthandling/TextInserter";

function FrontPage({ playVideo }) {

  const { lang } = useContext(LangContext);
  const [isRightToLeft, setIsRightToLeft] = useState(false);
  const mapCircleImg = useRef(null);
  const handArrow = useRef(null);

  useEffect(() => {
    if (lang === "hebrew") {
      setIsRightToLeft(true);
    } else {
      setIsRightToLeft(false);
    }
  }, [lang]);

  const hundelOnClick = () => {
    playVideo();
    mapCircleImg.current.style.visibility = "hidden";
    handArrow.current.classList.add("fade");
  };

  return (
    <>
      <video
        poster={isRightToLeft ? backgroundHeb : backgroundEn}
        id="zoomInVideo"
        src={isRightToLeft ? videoHeb : videoEn}
        className="fullBackground"
      />
      <img ref={handArrow} src={isRightToLeft ? hebHandArrow : enHandArrow} className={isRightToLeft ? "hand-heb-arrow" : "hand-en-arrow"} alt="hand arrow" />
      <img src={mapCircle} ref={mapCircleImg} alt="map circle" onClick={hundelOnClick} className={isRightToLeft ? "map-circle-heb" : "map-circle-en"} />
      <TextInserter />
    </>
  );
}

export default FrontPage;
