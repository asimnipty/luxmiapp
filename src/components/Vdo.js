import React from "react"

export default function Vdo(props) {
    return (
        <div className="contact-card">
            <img src={props.img}/>
            <h3>{props.name}</h3>
            <div className="info-group">
                <img src="../images/fb.png" />
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img src="../images/ytube.png" />
                <p>{props.email}</p>
            </div>
        </div>
    )
}

const person = {
    img: "../images/cook.png",
    name: "Luxmi ",
    phone: "youtube.com",
    email: "facebook.com"
}

