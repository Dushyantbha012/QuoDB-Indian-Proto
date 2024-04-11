import React from "react";
import "./card.css";
interface propInterface {
  name: String;
  quote: String;
}
function Card(props: propInterface) {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <p className="title overflow-hidden">{props.name}</p>
          <p>{""}</p>
        </div>
        <div className="flip-card-back p-2">
          <p className="title overflow-hidden">{props.quote}</p>
          <p>{""}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
