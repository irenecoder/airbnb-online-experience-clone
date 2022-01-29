import React from "react"
import "./card.css"




function Card(props){
    console.log(props);
    return(
        <div className="card">
            <img src={`./images/${props.img}`} alt=""className="card-image"></img>
            <div className="card--stats">
                {/* <img src={process.env.PUBLIC_URL + './images/star.jpg'} alt="" className="card-star"></img>  */}
                <img src={`./images/${props.star}`} alt="" className="card-star"></img>
                <span >{props.rating}</span>
                <span className="gray">{props.number}</span>
                <span className="gray">{props.country}</span>
            </div>
            <p>{props.description}</p>
            <p><span className="bold">{props.price}</span></p>

        </div>
    )
}
export default Card;