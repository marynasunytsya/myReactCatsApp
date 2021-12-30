import React from "react";
import App from "./App";

const SearchBox = ({searchfield, searchChange}) => {
    return (
        <div className="pa2">
        <input 
        className="pa3 ba b--green bg-lightest-pink" 
        type = 'recherche' 
        placeholder = 'Rechercher un chat' 
        onChange={searchChange}/>
        </div>
    );
}

export default SearchBox; 