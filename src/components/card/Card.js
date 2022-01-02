import React from "react";
import './Card.css';

const Card = ({name, email, id}) => {
    return (
        <div className="tc grey dib br4 pa4  ma2 grow bw2 shadow-5">
            <img alt="cats" src={`https://robohash.org/set_set4/${id}size=500x500`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>                                                                                                       
    );
}

export default Card;              