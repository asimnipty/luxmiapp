import React from "react"


export default function Vdo(props) {
    
    return (
        <div className="contact-card">
            <img src={require("./images/cook.png")}/>
            <h3>{props.name}</h3>
            <div className="info-group">
                <img src={require("./images/fb.png")} />
                <p>{props.fb}</p>
            </div>
            <div className="info-group">
                <img src={require("./images/ytube.png")} />
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

