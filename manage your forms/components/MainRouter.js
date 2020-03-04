import React from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Login from './Login'
import SignUp from './SignUp'
import AppBar from './AppBar'
import UsersF from './UsersF'

export default function MainRouter() {

    return (
        <div>
            <Router>
                <AppBar></AppBar>
                
                <Link to="/">Home</Link><br />


                <Switch>

                    <Route path="/users">
                        <UsersF></UsersF>
                    </Route>
                    <Route path="/signup">
                        <SignUp initalMessage="Start Up Message"></SignUp>
                    </Route>
                    <Route path="/">
                        <Login initalMessage="Start Up"></Login>
                    </Route>
                </Switch>

            </Router>
        </div>


    )

}