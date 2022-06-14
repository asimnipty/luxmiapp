import React from "react"

import Navbar from "./components/Navbar"
import Vdo from "./components/Vdo"
import "./style.css"




function App() {
  return (
    <div>     
      <Navbar />
      <h1> App heading </h1>
       

    <div className="contacts">
          <Vdo 
            img="../images/cook.png" 
            name="Luxmi"
            phone="facebook.com"
            email="youtube.com"
          />
          <Vdo 
            img="../images/cook.png" 
            name="Luxmi"
            phone="facebook.com"
            email="youtube.com"
          />
          <Vdo 
            img="./images/cook.png" 
            name="Luxmi"
            phone="facebook.com"
            email="youtube.com"
          />
          <Vdo 
            img="./images/cook.png" 
            name="Luxmi"
            phone="facebook.com"
            email="youtube.com"
          />
         </div>
          
      
    </div>
  )
}

export default App;
