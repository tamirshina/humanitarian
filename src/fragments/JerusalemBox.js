import React, { useContext, useEffect, useState } from "react";
import LangContext from "../LangContext";
import pin from "../assets/Screen-03/PIN.png";
import "../App.css";

function JerusalemBox({ infoToInsert, cssForText, textBox }) {
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
        <div className={"jerusalem-box"} >
            <h1 style={cssForText}>{infoToInsert}</h1>
            <img src={pin} alt="pin" style={cssForText} />
        </div>

    );
}

export default JerusalemBox;
