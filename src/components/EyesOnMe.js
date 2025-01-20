import React from "react";

function EyesOnMe(){
    function focusHere(){
        console.log("Good!")
    }
    function blurredAway(){
        console.log("Hey! Eyes on me!")
    }   
    return <button onFocus={focusHere} onBlur={blurredAway}>Eyes on me</button>
}

export default EyesOnMe;