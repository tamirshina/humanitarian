import React from "react";
import homeImg from "../assets/35-home.png";
import "../App.css";

function HomeBtn({ homeBtnLogic }) {
  return (
    <img
      src={homeImg}
      alt="homeBtn"
      onClick={homeBtnLogic}
      className={"homeBtn"}
    />
  );
}

export default HomeBtn;
