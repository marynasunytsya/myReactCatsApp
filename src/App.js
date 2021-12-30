import React from "react";
import CardList from "./CatsList";
import { cats } from "./Cats";
import SearchBox from "./SearchBox";
import { Component } from "react/cjs/react.production.min";
import './App.css'; 



class App extends Component {
    constructor(){
        super()
        this.state = {
            cats: cats,
            searchfield: ''

        }
    }
    
    onSearchChange= (event) => {

        this.setState({searchfield: event.target.value})
    }

    render() {
        const filteredCats = this.state.cats.filter(cats => {
            return cats.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        }) 
        return (
            <div className="tc">
                <h1>My React Cats App</h1>
                <SearchBox searchChange={this.onSearchChange}/>
            <CardList cats= {filteredCats}/>
            </div>
        );
    }
}

export default App;