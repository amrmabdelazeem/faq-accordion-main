import React from "react";
import Heading from "./Heading";
import Question from "./Question";
import QA from "../Q&A";

export default function App(){

    return <div className="container">
    <Heading/>
    {QA.map(x=> (
        <Question 
        key={x.id}
        id = {x.id}
        question = {x.question}
        answer = {x.answer}
        />
    ))}
    </div>
}