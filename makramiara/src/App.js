import React from "react";
import './scss/_main.scss';
import './App.scss';
import Navbar from "./navbar";
import {BrowserRouter as Router} from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar/>
                <p>My app</p>
            </div>
        </Router>
    );
}

export default App;
