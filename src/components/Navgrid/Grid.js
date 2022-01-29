import React from "react"
import "./navgrid.css"
import grid from "./grid.jpg"

function Grid(){
    return(
        <section className="grid-container">
            <img src={grid}alt="photo grid" className="grid-image"></img>
            <h3 className="grid-header"> Online Experiences</h3>
            <p className="grid-text">Join our interactive platform and tell us your views about our app. These are important to improve the functionality of the app</p>

        </section>
    )
}
export default Grid;