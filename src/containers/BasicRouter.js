import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Header} from "./Header";
import {Footer} from "./Footer";

const BasicRooter = () => (
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/">Header</Link>
                </li>
                <li>
                    <Link to="/footer">Footer</Link>
                </li>
            </ul>

            <hr />

            <Route exact path="/" component={Header} />
            <Route path="/footer" component={Footer} />
        </div>
    </Router>
);
export default BasicRooter;