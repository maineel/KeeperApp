import React from "react";
import { ReactDOM } from "react-dom";

var noteCount = 1;
function Note(){
    return (
    <div>
    <div className="note">
        <h1>Note #{noteCount++}</h1>
        <p>Enter Note Content</p>
    </div>
    <div className="note">
        <h1>Note #{noteCount++}</h1>
        <p>Enter Note Content</p>
    </div>
    </div>
    )    
}

export default Note;