import React, {useState} from "react";

export default function Question({question, id}) {

  const [isClicked, setClicked] = useState(false);

  function handleClick() {
      setClicked(preValue=>{
        return !preValue;
      });
  }

  return (
    <div className="question" tabIndex={0} onClick={handleClick}>
      <div className="top">
        <h2>{question}</h2>
        <img
          id="navigate"
          src={isClicked ? "./images/icon-minus.svg" : "./images/icon-plus.svg"}
          alt={isClicked ? "minus-icon" : "plus-icon"}
        />
      </div>
      <p style={{display: isClicked ? "block" : "none"}} >
        Frontend Mentor offers realistic coding challenges to help developers
        improve their frontend coding skills with projects in HTML, CSS, and
        JavaScript. It's suitable for all levels and ideal for portfolio
        building.
      </p>
    </div>
  );
}
