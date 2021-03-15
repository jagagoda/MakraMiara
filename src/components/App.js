import React from "react";
import '../App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import HomePage from "./HomePage";
import About from "./About";
import Api from "./Api";
import Tutorials from "./Tutorials";
import Gallery from "./Gallery";
import Calculator from "./Calculator";
import Macrame1 from "./Macrame1";
import GlobalStyle from "./GlobalStyles";
import Macrame2 from "./Macrame2";
import Macrame3 from "./Macrame3";

function App() {
    return (
        <Router>
            <GlobalStyle/>
           <Switch>
               <Route path="/" exact component={HomePage}/>
               <Route path="/makramiara" exact component={HomePage}/>
               <Route path="/makrama" exact component={About}/>
               <Route path="/miarka" exact component={Calculator}/>
               <Route path="/" exact render={Api}/>
               <Route path="/tutoriale" exact render={Tutorials}/>
               <Route path="/galeria" exact render={Gallery}/>
               <Route path="/macrame1" exact render={Macrame1}/>
               <Route path="/macrame2" exact render={Macrame2}/>
               <Route path="/macrame3" exact render={Macrame3}/>
           </Switch>
        </Router>
    );
}

export default App;
