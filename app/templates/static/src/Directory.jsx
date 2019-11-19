import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

export class Directory extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            lon: 0,
            lat: 0
        }

    }

    componentDidMount = () => {
        this.getLocation();
    }

    getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.showPosition);
        } else { 
            alert('Geolocation Not supported by current browser');
        }
    }

    showPosition = (position) => {
        this.setState({lon: position.coords.longitude});
        this.setState({lat: position.coords.latitude});
    }

    signOut = () => {
        var auth2 = window.gapi.auth2.getAuthInstance();
        auth2.signOut().then( () => {
          console.log('User signed out.');
          this.props.history.push('/login');
        });
    }

    render() {
        return (
            <div>
                <p>
                    LOGGED IN !!!
                </p>
                <button onClick={this.signOut}>Sign Out</button>
                <p>
                    Longitude: {this.state.lon}
                </p>
                <p>
                    Latitude: {this.state.lat}
                </p>
            </div>
        )
    }
}

export default withRouter(Directory)
