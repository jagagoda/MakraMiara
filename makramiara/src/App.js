import React from "react";
import './scss/_main.scss';
import './App.scss';
import Navbar from "./navbar";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import FirstPage from "./scss/elements/FirstPage";
function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={FirstPage}/>
                <Route path="/carrramba" exact component={Home}/>
                <Route path="/about" exact component={About}/>
                <Route path="/signup" exact component={Login}/>
                <Route path="/trips" exact render={Travel}/>
                <Route path="/mytravels" exact render={MyTravel}/>
                <Route path="/people" exact render={People}/>
            </Switch>
        </Router>
    );
}

export default App;
