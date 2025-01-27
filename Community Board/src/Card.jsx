import React from "react"
import  "./Card.css"

const Card = (props) => {
  return (
    <div className="Card">
      <img className="Card-image" src={props.img} alt={props.name} />
      <div className="Card-content">
        <h3>{props.name}</h3>
        <h4>{props.cuisine}</h4>
        <a href={props.href} target="_blank" rel="noopener noreferrer">
          <button className="Card-button">View Menu</button>
        </a>
      </div>
    </div>
  )
}

export default Card

