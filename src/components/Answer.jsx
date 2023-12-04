import React from "react";

export default function Answer(props){
    return  <p style={{display : props.isOpen ? "none": "block"}}>
    Frontend Mentor offers realistic coding challenges to help developers improve their 
  frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for 
  all levels and ideal for portfolio building.
  </p>
}