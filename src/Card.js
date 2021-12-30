import React from "react";

const Card = ({name, email, id}) => {
    return (
        <div className="tc bg-light-purple dib br4 pa4 pa3-ns ma2  grow bw2 shadow-5">
            <img alt="cats" src={`https://robohash.org/set_set4/${id}size=500x500`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>                                                                                                       
    );
}

export default Card;              