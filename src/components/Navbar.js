import React from "react"
import logo from "../images/logoR.png"


export default function Navbar() {
    return (
        <nav>
            <img src={logo} className="nav--logo"/>
            <h1 className="nav--logo-text" > <a href= "https://www.youtube.com/c/Luxmisculinary">Luxmi's Culinary</a> </h1>
              
        </nav>
        
    )
    
}


