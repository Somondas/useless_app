import React, { useState } from "react";

const App = () =>{
    const newColor = "#8e44ad"
    const [clr, updclr] = useState(newColor);
    const [text, Uptext] = useState("Click Me")
    const UpdateColor = () =>{
        const newColor = "purple"
        updclr(newColor)
        Uptext("🤙")
    }
    const ReturnSet = () =>{
        updclr("#8e44ad")
        Uptext("Click Me")
    }

    return(
        <div style={{backgroundColor: clr}}>
            <button onClick={UpdateColor} onDoubleClick={ReturnSet}>{text}</button>
        </div>
    )
}
export default App;