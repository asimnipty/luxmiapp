import React, {useState} from "react"
import urlData from "../urlData"

export default function Url(){
    const [count, setCount] = useState(0)
    
    const [url, setUrl] = useState("")
    function increment() {
        setCount (prevCount => prevCount + 1)
    }
    function decrement() {
        setCount (prevCount => prevCount - 1)
    }
    
    
    return (
        <div className="div-button">           
            <p>{url}</p>
            <button onClick={decrement} > - </button>
            <button> {count} </button>
            <button onClick={increment} > + </button>
            <button >Click</button>
        </div>
        

    )
    
  
}

