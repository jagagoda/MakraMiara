import React from "react";
import '../scss/_main.scss';
import '../App.scss';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import HomePage from "./HomePage";
import About from "./About";
import Shop from './Shop';
import Api from "./Api";
import Tutorials from "./Tutorials";
import Project from "./Project";
import Calculator from "./Calculator";
import Macrame1 from "./Macrame1";

function App() {
    return (
        <Router>
           <Switch>
               <Route path="/" exact component={HomePage}/>
               <Route path="/makramiara" exact component={HomePage}/>
               <Route path="/makrama" exact component={About}/>
               <Route path="/miarka" exact component={Calculator}/>
               <Route path="/sklep" exact component={Shop}/>
               <Route path="/" exact render={Api}/>
               <Route path="/tutoriale" exact render={Tutorials}/>
               <Route path="/gotoweprojekty" exact render={Project}/>
               <Route path="/macrame1" exact render={Macrame1}/>
           </Switch>
        </Router>
    );
}

export default App;
