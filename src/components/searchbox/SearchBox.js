import React from "react";


const SearchBox = ({searchfield, searchChange}) => {
    return (
        <div className="pa2">
        <input 
        className="pa3 ba  bg-transparent" 
        type = 'recherche' 
        placeholder = 'Rechercher un chat' 
        onChange={searchChange}/>
        </div>
    );
}

export default SearchBox; 
