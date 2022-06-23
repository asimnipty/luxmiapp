import React from "react"
//import img from "../images/cook.png"
//import yt from "../images/ytube.png"
//import fb from "../images/fb.png"



export default function Vdo(props) {
    
    return (
        <div className="vdo-card">
            <img src={props.img}/>
            <h3>{props.name}</h3>
            <div>
                <img src= {require("../images/star.png")} className="card-star" />
                
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.des} </p>
            <div className="info-group">
                <img src= {require("../images/fb.png")}  />
                <p>facebook</p>
            </div>
            <div className="info-group">
                <img src= {require("../images/ytube.png")} />
                <a href= "https://www.youtube.com/c/Luxmisculinary">youtube</a>
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

