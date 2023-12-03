import React, { useState } from "react";
import Heading from "./Heading";
import Question from "./Question";
import Answer from "./Answer";

export default function App(){

    return <div className="container">
    <Heading/>
    <Question src={"./images/icon-plus.svg"}/>
    <Answer/>
    </div>
}