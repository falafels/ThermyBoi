import React from "react";
import ApiService from "./api/ApiService.jsx";

export default class App extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
            posts: []
        }

        this.apiService = new ApiService();
    }

    call = () => {
        this.apiService.doSomething();
    }

    render () {
        return (
            <div>
                <p> Hello React! </p>
                <button onClick={this.call()}></button>
            </div>
        );
    }
}