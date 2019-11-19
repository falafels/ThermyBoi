import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import ApiService from "./api/ApiService.jsx";

export class Directory extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rooms: [],
            lon: 0,
            lat: 0,
            isLoaded: false
        }

        this.apiService = new ApiService();
    }

    componentDidMount = () => {
        this.getLocation();
        this.apiService.getRooms()
        .then(response => response.data)
        .then(data => {
            this.setState({
                rooms: data,
                isLoaded: true
            });
        })
        .catch(err => console.log(err))
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
        var {rooms, lon, lat, isLoaded} = this.state;
        
        return (
            <div>
                <p>
                    LOGGED IN !!!
                </p>
                <ul>
                    {isLoaded ? rooms.map(room => (
                        <li key={room.toString()}>{room.toString()}</li>
                    )): "NOT THERE YET"}
                </ul>
                <p>
                    Longitude: {lon}
                </p>
                <p>
                    Latitude: {lat}
                </p>
                <button onClick={this.signOut}>Sign Out</button>
            </div>
        )
    }
}

export default withRouter(Directory)
