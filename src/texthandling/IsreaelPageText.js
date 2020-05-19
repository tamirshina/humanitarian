import React, { useContext, useEffect, useState } from "react";
import LangContext from "../LangContext";
import "../App.css";

function IsraelPageText({ infoToInsert, cssForText, hebCssFortext }) {
    const lang = useContext(LangContext).lang;

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


    return (
        <div id="frontPageText" className={"container-to-fade"} style={isRightToLeft ? hebCssFortext : cssForText}>
            <p
                className={isRightToLeft ? "infoHeText" : "infoEnText"}
                dangerouslySetInnerHTML={createMarkup(infoToInsert)}
            ></p>
        </div>

    );
}

export default IsraelPageText;
