import React from "react";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Transactions from "../pages/Transactions";
import Home from "../pages/Home";
import Insights from "../pages/Insights";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";

export default function Nav() {

    return(
        <>
        <Router>
        <div className="sticky">
            <div className="navBarContainer">
                <div className="navBar">
                    <ul>
                        <div className="left">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/transactions">Transactions</Link></li>
                            <li><Link to="/insights">Insights</Link></li>
                        </div>
                        <div className="right">
                            {/* <li>Record Now</li> */}
                        </div>


                    </ul>
                </div>
            </div>
        </div>
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/about">
                <About />
            </Route>
            <Route exact path="/contact">
                <Contact />
            </Route>
            <Route exact path="/transactions">
                <Transactions />
            </Route>
            <Route exact path="/insights">
                <Insights />
            </Route>
        </Switch>
        </Router>
        </>
    )

} 