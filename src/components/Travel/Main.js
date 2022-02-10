import React from "react"
import "./travel.css"


function Main(props) {
    return(
        <div className="main--container">
            <img src={`./images/${props.img}`} alt="city image" className="city-image"></img>
            {/* <h3>{props.city}</h3> */}
            <div className="para">
                <h2>{props.title}</h2>
                <p className="city-description">{props.experience}</p>
                <h3 className="date-visited">{props.date}</h3>

            </div>
            

        </div>
    )

}
export default Main;