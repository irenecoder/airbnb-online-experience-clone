import './App.css';
import React from 'react'
import Navbar from "../Navgrid/Navbar"
import Grid from "../Navgrid/Grid"
import Card from "../Card/Card"
import data from "./data.js"


function App() {
    const cards = data.map(info=>{
        return(
        <Card 
          key={info.id}
          {...info}
        //   info={info}
        //   img = {info.img}
        //   address= {info.address}
        //   number={info.number}
        //   country={info.country}
        //   description={info.description}
        //   price={info.price} 
        //   openSpots={info.openSpots}
        //   location={info.location}
        />
        )
    })
    return(
        <div>
            <Navbar />
            <Grid />
            <section className="cards-list">
            {cards}

            </section>
            
            
            

        </div>
    )

}
export default App;

