import React from 'react'
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import Forms from "./Forms"
import Home from "./Home"
export default function MainRouter(){
    return (
        <Router>
            <Switch>
            <Route path= "/forms">
                <Forms></Forms>
            </Route>
            <Route path= "/">
                <Home ></Home>
            </Route>

            </Switch>

        </Router>

    )
}