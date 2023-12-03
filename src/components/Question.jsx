import React from "react";

export default function Question(props){
    
    return <div className="question">
    <h2>What is Frontend Mentor, and how will it help me?</h2>
    <img id="navigate" src={props.src} alt="plus-icon"/>
    </div>
}