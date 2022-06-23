import React from "react"

import Navbar from "./components/Navbar"
import Vdo from "./components/Vdo"
import "./style.css"
import Vdodata from "./Vdodata"




function App() {
  const vdoElement = Vdodata.map (item => {
    return (
      < Vdo
          key = {item.id}
          img = {item.coverImg}
          name = {item.title}
          rating = {item.rating}
          des = {item.des} 
          location = {item.location}
      />    

    )
  })
  return (
      <div>
          <Navbar />
          <marquee><h2> Website under construction </h2></marquee>
          <section className="vdo-list">
                {vdoElement}
          </section>
          
     
        
      </div>
  
  )
}

export default App;
