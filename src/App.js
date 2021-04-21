import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import About from "./components/pages/About";
import Api from "./components/organisms/Api";
import Tutorials from "./components/pages/Tutorials";
import Gallery from "./components/organisms/Gallery";
import Calculator from "./components/pages/Calculator";
import Macrame1 from "./components/atoms/Macrame1";
import GlobalStyle from "./components/atoms/GlobalStyles";
import Macrame2 from "./components/atoms/Macrame2";
import Macrame3 from "./components/atoms/Macrame3";

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
