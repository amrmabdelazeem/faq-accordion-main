import React from "react";
import Heading from "./Heading";
import Question from "./Question";
import QA from "../Q&A";

export default function App(){


    document.addEventListener("keydown", (event)=>{
        if(event.key === 'Enter' || event.key === ' '){
            event.target.click();
        }
    })
    return <main className="container">
    <Heading/>
    {QA.map((section, index)=> (
        <Question 
        key={index}
        id = {index}
        question = {section.question}
        />
    ))}
    </main>
}