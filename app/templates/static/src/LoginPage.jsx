import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import ApiService from "./api/ApiService.jsx";

export class LoginPage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            posts: [],
            name: ""
        }

        this.apiService = new ApiService();
    }

    componentDidMount() {
		window.gapi.signin2.render('g-signin2', {
			'scope': 'profile email',
			'width': 200,
			'height': 50,
			'longtitle': true,
			'theme': 'dark',
			'onsuccess': this.onSignIn
		});
	}

    call = () => {
        this.apiService.doSomething();
    }

    onSignIn = (googleUser) => {
        var profile = googleUser.getBasicProfile();
        console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
        this.state.name = profile.name;
        this.props.history.push('/directory');
      }

    render() {
        return (
            <div>
                <p> Hello React! </p>
                <button onClick={this.call()}></button>
                <div id="g-signin2"></div>
            </div>
        )
    }
}

export default withRouter(LoginPage)
