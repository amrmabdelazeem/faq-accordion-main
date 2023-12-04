import React, { useState } from "react";
import Heading from "./Heading";
import Question from "./Question";
import Answer from "./Answer";

export default function App(){
    const [isClicked, setClicked] = useState(false);

    function handleClick(){
        document.getElementById("navigate").addEventListener("click", ()=>{
            setClicked(!isClicked);
        })
    }
    return <div className="container">
    <Heading/>
    <Question isOpen={isClicked} navigate={handleClick}/>
    <Answer isOpen={isClicked}/>
    </div>
}