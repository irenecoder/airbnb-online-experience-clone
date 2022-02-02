import React from "react"
import "./card.css"




function Card(props){
    console.log(props);
    let badgeText
    if(props.openSpots ===0){
        badgeText = "SOLD OUT"
    }
    else if (props.location ==="Online"){
        badgeText = "ONLINE"
    }
    return(

        <div className="card">
            {badgeText &&<div className="card--badge">{badgeText}</div>}
            <img src={`./images/${props.img}`} alt=""className="card-image"></img>
            <div className="card--stats"> 
                {/* <img src={process.env.PUBLIC_URL + './images/star.jpg'} alt="" className="card-star"></img>  */}
                <img src="./images/star.jpg " alt="" className="card-star"></img>
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