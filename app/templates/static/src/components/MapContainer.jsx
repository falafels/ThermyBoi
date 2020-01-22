import React, { Component } from 'react';
import {Map, GoogleApiWrapper, Marker} from 'google-maps-react';
 
const mapStyles = {
    width: '90%',
    height: '100%',
  };

export class MapContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Map
                google={this.props.google}
                zoom={16}
                style={mapStyles}
                // initialCenter={{ lat: this.props.lat, lng: this.props.lon}}
                initialCenter={{ lat: 43.259003, lng: -79.920766}}
            >
                <Marker position={{ lat: 43.259003, lng: -79.920766}} />
            </Map>
        );
    }
}
 
export default GoogleApiWrapper({
  apiKey: 'AIzaSyDCWbHak9QI8k9Nthf3LJV1kkpMo4kide0'
})(MapContainer)