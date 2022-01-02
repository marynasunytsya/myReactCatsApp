import React from "react";
import Card from '../card/Card';

const CatsList = ({ cats }) => {
    return (
        <div>
            {
                cats.map((user, i) => {
                    return (
                        <Card key={i}
                            id={cats[i].id}
                            name={cats[i].name}
                            email={cats[i].email} />
                    );
                })
            }
        </div>
    );
}

export default CatsList;

