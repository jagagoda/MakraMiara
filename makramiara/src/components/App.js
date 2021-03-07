import React from "react";
import '../scss/_main.scss';
import '../App.scss';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import HomePage from "./HomePage";
import About from "./About";
import Shop from './Shop';
import Moon from "./Moon";
import Tutorials from "./Tutorials";
import Projects from "./Projects";
import Calculator from "./Calculator";

function App() {
    return (
        <Router>
           <Switch>
               <Route path="/" exact component={HomePage}/>
               <Route path="/makramiara" exact component={HomePage}/>
               <Route path="/makrama" exact component={About}/>
               <Route path="/miarka" exact component={Calculator}/>
               <Route path="/sklep" exact component={Shop}/>
               <Route path="/moon" exact render={Moon}/>
               <Route path="/tutoriale" exact render={Tutorials}/>
               <Route path="/gotoweprojekty" exact render={Projects}/>
           </Switch>
        </Router>
    );
}

export default App;
