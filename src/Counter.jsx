import React from "react";
import { useState } from "react";
import { useEffect } from "react";


const CountTitle =() =>{
    const [num, setNum] = useState(0)
    const [click, setclick] = useState("Click")

    const clickFun = () =>{
        setNum(num + 1)
        setclick("Clicked")
    }

    useEffect(() => {
        document.title = `You click the button ${num} times`;
    })

    return(
        <button onClick={clickFun}>
            {click} {num}
        </button>
    )
}

export default CountTitle;