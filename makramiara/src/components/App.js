import React from "react";
import '../scss/_main.scss';
import '../App.scss';
import Navbar from "./navbar";
import {BrowserRouter as Router} from "react-router-dom";
import Hero from "./Hero";

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar/>
                <Hero/>
            </div>
        </Router>
    );
}

export default App;
