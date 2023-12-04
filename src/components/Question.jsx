import React from "react";

export default function Question(props){

    return <div className="question">
    <h2>What is Frontend Mentor, and how will it help me?</h2>
    <img onClick={props.navigate} id="navigate" src={props.isOpen ? "./images/icon-plus.svg" : "./images/icon-minus.svg"} alt="icon"/>
    </div>
}