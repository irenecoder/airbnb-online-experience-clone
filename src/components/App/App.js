import './App.css';
import React from 'react'
import Navbar from "../Navgrid/Navbar"
import Grid from "../Navgrid/Grid"
import Card from "../Card/Card"


function App() {
    return(
        <div>
            <Navbar />
            <Grid />
            <Card 
                img ="bike.jpeg"
                address= "3.0"
                number="(7)"
                star="star.jpg"
                country="Kenya"
                description="Having fun in Dubai"
                price="From $200/ person"

            />   
            <Card 
                img ="bride.jpeg"
                address= "4.0"
                number="(10)"
                star="star.jpg"
                country="Canada"
                description="Swimming in the river"
                price="From $150/ person"
                
                />
            <Card
                img ="sports.jpeg"
                address= "5.0"
                number="(6)"
                star="star.jpg"
                country="USA"
                description="Baking a birthday cake"
                price="From $136/ person"
            
            />

        </div>
    )

}
export default App;

