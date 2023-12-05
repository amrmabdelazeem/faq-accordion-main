import React, { useState } from "react";
import QA from "../Q&A";

export default function Question({ id, onClick, question }) {
  const [isClicked, setClicked] = useState(false);

  function handleClick() {
    setClicked(!isClicked);
    onClick(id, isClicked);
  }

  return (
    <div className="question">
      <div className="top">
        <h2>{question}</h2>
        <img
          onClick={handleClick}
          id="navigate"
          src={isClicked ? "./images/icon-minus.svg" : "./images/icon-plus.svg"}
          alt={isClicked ? "minus-icon" : "plus-icon"}
        />
      </div>
      <p style={{display: "none"}}>
        Frontend Mentor offers realistic coding challenges to help developers
        improve their frontend coding skills with projects in HTML, CSS, and
        JavaScript. It's suitable for all levels and ideal for portfolio
        building.
      </p>
    </div>
  );
}
