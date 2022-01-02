import React from "react";
import Particles from "react-particles-js";
import ParticlesConfig from "./config/particle-config";
import './ParticlesBackground.css'

export default function ParticleBackground() {
    return (
        <div className="particles"> 
        <Particles params={ParticlesConfig}></Particles>
         </div>
    );

}