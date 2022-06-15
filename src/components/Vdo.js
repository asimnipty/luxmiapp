import React from "react"


export default function Vdo({img, name, fb, yt}) {
    return (
        <div className="contact-card">
            <img src={img}/>
            <h3>{name}</h3>
            <div className="info-group">
                <img src="fb.png" />
                <p>{fb}</p>
            </div>
            <div className="info-group">
                <img src="ytube.png" />
                <p>{yt}</p>
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

