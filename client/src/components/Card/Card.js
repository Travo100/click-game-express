import React from "react";
import "./Card.css";

const Card = props => (
        <div
            className="card"
            onClick={() => props.pickedChihuahua(props)}
            style={{ backgroundImage: `url("${props.image}")` }}>
        </div>
);

export default Card;