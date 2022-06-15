import React from "react"

import Navbar from "./components/Navbar"
import Vdo from "./components/Vdo"
import "./style.css"




function App() {
  return (
      <div>
          <Navbar />
          <h2> Website under construction </h2>
     
        <div className="contacts">
        <Vdo 
            img="./images/cook.png" 
            name="Luxmi"
            fb="facebook.com"
            yt="youtube.com"
          />
        <Vdo 
            img="./images/cook.png" 
            name="Luxmi"
            fb="facebook.com"
            yt="youtube.com"
          />
        <Vdo 
            img="./images/cook.png" 
            name="Luxmi"
            fb="facebook.com"
            yt="youtube.com"
          />
        <Vdo 
            img="./images/cook.png" 
            name="Luxmi"
            fb="facebook.com"
            yt="youtube.com"
          />
        </div> 
          
      </div>
  
  )
}

export default App;
