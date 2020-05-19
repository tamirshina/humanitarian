import React, { useContext } from "react";
import background from "../assets/Screen-03/03-background.png";
import LangContext from "../LangContext";
import russianText from "../texthandling/RussianText";
import englishText from "../texthandling/EnglishText";
import hebrewText from "../texthandling/HebrewText";
import boxOne from "../assets/Screen-03/TextBox-1.png";
import boxTwo from "../assets/Screen-03/TextBox-2.png";
import boxThree from "../assets/Screen-03/TextBox-3.png";
import boxFour from "../assets/Screen-03/TextBox-4.png";
import boxFive from "../assets/Screen-03/TextBox-5.png";
import "../App.css";
import JerusalemBox from "../fragments/JerusalemBox";

function JerusalemPage() {

    const { lang } = useContext(LangContext);

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

    function squareInfoToInsert() {
        //return whichFileToUse().JerusalemPage.russianSquare;
        return "מגרש הרוסים"
    }
    function mariaChurchInfoToInsert() {
        //return whichFileToUse().JerusalemPage.mariaChurch;
        return "מריה מגדלן"
    }
    function nyvskyChurchInfoToInsert() {
        //return whichFileToUse().JerusalemPage.nyvskyChurch;
        return "אלכסנדר נייבסקי"
    }
    function ascensionChurchInfoToInsert() {
        //return whichFileToUse().JerusalemPage.ascensionChurch;
        return "כנסיית העלייה"
    }
    function benjeminYardInfoToInsert() {
        //return whichFileToUse().JerusalemPage.benjeminYard;
        return "חצר בינימין"
    }
    const cssRussianSquare = {
        position: "fixed",
        top: "30%",
        left: "15%"
    };
    const cssMariaChurch = {
        position: "fixed",
        top: "43%",
        right: "4%"
    };
    const cssNyvskyChurch = {
        position: "fixed",
        top: "47%",
        right: "54%"
    };
    const cssAscensionChurch = {
        position: "fixed",
        top: "43%",
        right: "0%"
    };
    const cssBenjeminYard = {
        position: "fixed",
        top: "22%",
        left: "21%"
    };

    return (
        <>
            <img
                id="israelPageVideo"
                src={background}
                className="fullBackground"
                alt="backgroundPic"
            />
            <JerusalemBox infoToInsert={squareInfoToInsert()} cssForText={cssRussianSquare} textBox={boxOne} />
            <JerusalemBox infoToInsert={mariaChurchInfoToInsert()} cssForText={cssMariaChurch} textBox={boxTwo} />
            <JerusalemBox infoToInsert={nyvskyChurchInfoToInsert()} cssForText={cssNyvskyChurch} textBox={boxThree} />
            <JerusalemBox infoToInsert={ascensionChurchInfoToInsert()} cssForText={cssAscensionChurch} textBox={boxFour} />
            <JerusalemBox infoToInsert={benjeminYardInfoToInsert()} cssForText={cssBenjeminYard} textBox={boxFive} />
        </>
    );
}

export default JerusalemPage;
