import React from "react";
import CardList from "./components/cats/CatsList";
import { cats } from "./components/cats/Cats";
import SearchBox from "./components/searchbox/SearchBox.js"; 
import { Component } from "react/cjs/react.production.min";
import './App.css';
import Tilt from 'react-tilt'
import ParticleBackground from "./particles/ParticlesBackground";

class App extends Component {
    constructor() {
        super()
        this.state = {
            cats: cats,
            searchfield: ''

        }
    }

    onSearchChange = (event) => {

        this.setState({ searchfield: event.target.value })
    }

    render() {
        
        const filteredCats = this.state.cats.filter(cats => {
            return cats.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
            <div className="tc">
                <ParticleBackground />
                <Tilt className="Tilt" style={{ alignItems: 'center' }} >
                    <div className="Tilt-inner"> <h1>React Cats App</h1> </div>
                </Tilt>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList cats={filteredCats} />
                
            </div>
        );
    }
}

export default App;