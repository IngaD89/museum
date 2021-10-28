import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Form from "./components/Form";





function App() {
    return <Router>
        <NavBar/>
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
           </Switch>
        <Switch>
            <Route exact path="/form">
                <Form/>
            </Route>
        </Switch>
    </Router>

}

export default App;
