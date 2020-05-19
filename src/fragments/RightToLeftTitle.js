import React from "react";
import "../App.css";

function RightToLeftTitle({ titleToInsert }) {
  return (
    <div className="titleBoxHeb">
      <h1 className="addTitleFont heInfoPageTitle">{titleToInsert}</h1>
    </div>
  );
}
export default RightToLeftTitle;
