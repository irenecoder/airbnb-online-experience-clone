import './App.css';
import React from 'react'
import Navbar from "../Navgrid/Navbar"
import Grid from "../Navgrid/Grid"
import Card from "../Card/Card"
import data from "./data.js"
import Nav from "../Travel/Nav"
import tradata from "./tradata.js"
import Main from "../Travel/Main.js"


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
    const places = tradata.map(item=>{
        return(
            <Main
            key={item.id}
            {...item} />
        )

    })
    return(
        <div>
            <Nav />
            <section className="places-list">
             {places}
            </section>
        </div>
    )

}
export default App;

