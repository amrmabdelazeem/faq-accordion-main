import React, {useState} from "react";
import Heading from "./Heading";
import Question from "./Question";
import QA from "../Q&A";

export default function App(){
    const [isClicked, setClicked] = useState(0);

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
        isClicked = {isClicked === index}
        onShow = {()=> setClicked(index)}
        />
    ))}
    </main>
}