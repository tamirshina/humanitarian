import React, { useContext, useRef, useEffect, useState } from "react";
import LangContext from "../LangContext";
import russianText from "./RussianText";
import englishText from "./EnglishText";
import hebrewText from "./HebrewText";
import RighToLeftTitle from "../fragments/RightToLeftTitle";
import LeftToRightTitle from "../fragments/LeftToRightTitle";
import "../App.css";

function TextInserter() {
  const lang = useContext(LangContext).lang;
  const textParaEl = useRef(null);

  const [isRightToLeft, setIsRightToLeft] = useState(false);

  useEffect(() => {
    if (lang === "hebrew") {
      setIsRightToLeft(true);
    } else {
      setIsRightToLeft(false);
    }
  }, [lang]);

  function createMarkup(str) {
    return { __html: str };
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

  function infoToInsert() {
    return whichFileToUse().frontPage.openingParagraph;
  }
  function titleToInsert() {
    return whichFileToUse().frontPage.title;
  }

  return (
    <div id="frontPageText" className={"container-to-fade"}>
      <div className={isRightToLeft ? "textBoxCss" : "en-text-box"}>
        {isRightToLeft ? (
          <RighToLeftTitle titleToInsert={titleToInsert()} />
        ) : (
            <LeftToRightTitle titleToInsert={titleToInsert()} />
          )}
        <div className={isRightToLeft ? "heb-text-shape-container" : "text-shape-container"}>
          <div className={isRightToLeft ? "heb-side-shape" : "side-shape"}></div>
          <p
            ref={textParaEl}
            className={isRightToLeft ? "infoHeText" : "infoEnText"}
            id="particularTextBox"
            dangerouslySetInnerHTML={createMarkup(infoToInsert())}
          ></p>
        </div>
      </div>
    </div>
  );
}

export default TextInserter;
