import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginPage from "./LoginPage.jsx";
import Directory from "./Directory.jsx";

export default class App extends React.Component {
    render () {
        return (
            <div>
                <Router>
                    <Route exact path="/login" component={LoginPage} />
                    <Route exact path="/directory" component={Directory} />
                </Router>
            </div>
        );
    }
}