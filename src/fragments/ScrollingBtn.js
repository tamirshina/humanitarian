import React from "react";
import scrollUpImg from "../assets/08-UP.png";
import scrollDwonImg from "../assets/07-down.png";
import { timer, removeTimer } from "../TimerHundler";
import "../App.css";

function ScrollingBtn({ homeBtnLogic, whichIsActive }) {
  function resetTimer() {
    removeTimer();
    timer(homeBtnLogic);
  }

  function scrollDown() {
    resetTimer();
    if (
      whichIsActive === "headsOf" ||
      whichIsActive === "importentStructures"
    ) {
      let paraEl = document.getElementById("imageTextContainer");
      if (paraEl) {
        paraEl.scrollTop += 10;
      }
    } else {
      let paraEl = document.getElementById("particularTextBox");
      if (paraEl) {
        paraEl.scrollTop += 10;
      }
    }
  }

  function scrollUp() {
    resetTimer();
    if (
      whichIsActive === "headsOf" ||
      whichIsActive === "importentStructures"
    ) {
      let paraEl = document.getElementById("imageTextContainer");
      if (paraEl) {
        paraEl.scrollTop -= 10;
      }
    } else {
      let paraEl = document.getElementById("particularTextBox");
      if (paraEl) {
        paraEl.scrollTop -= 10;
      }
    }
  }

  return (
    <div className="scroll-button-container">
      <img
        src={scrollUpImg}
        alt="scroll-up"
        onClick={scrollUp}
        className={"left-scroll"}
      />
      <img src={scrollDwonImg} alt="scroll-up" onClick={scrollDown} />
    </div>
  );
}

export default ScrollingBtn;
