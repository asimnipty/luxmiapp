import React from "react"
import img from "../images/cook.png"
import yt from "../images/ytube.png"
import fb from "../images/fb.png"



export default function Vdo(props) {
    
    return (
        <div className="contact-card">
            <img src= {img} />
            <h3>{props.name}</h3>
            <div className="info-group">
                <img src= {fb} />
                <p>{props.fb}</p>
            </div>
            <div className="info-group">
                <img src={yt} />
                <p>{props.yt}</p>
            </div>
        </div>
    )
}

/*const person = {
    img: "../images/cook.png",
    name: "Luxmi ",
    phone: "youtube.com",
    email: "facebook.com"
}*/

