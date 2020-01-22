import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ApiService from "../api/ApiService";
import MapContainer from "./MapContainer";

import {
    Button, Container,
} from "reactstrap";

export class VotePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rooms: [],
            temp: 23,
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

    increaseTemp = () => {
        this.setState( (state) => {
           return {temp: state.temp + 1} 
        } )
    }

    decreaseTemp = () => {
        this.setState( (state) => {
           return {temp: state.temp - 1} 
        } )
    }

    showPosition = (position) => {
        this.setState({lon: position.coords.longitude});
        this.setState({lat: position.coords.latitude});
    }

    render() {
        var {rooms, lon, lat, isLoaded, temp} = this.state;
        
        return (
            <div>
                <Container>
                    <div>
                        <div className="text-center">
                            <h1 className="mb-4"> You are in ITB 137!</h1>
                            <br/>
                        </div>
                        <div className="row justify-content-center">
                            <div id="map-canvas" className="col-8">
                            { lon != 0
                             &&
                             <MapContainer lon={lon} lat={lat} />
                            }
                        </div>
                            <div id="votingSystem" className="col-4">
                                <div className="row">
                                    <div className="col-12">
                                        <Button
                                            color="light"
                                            onClick={this.increaseTemp}
                                            className="btn-fix"
                                        >
                                            <FontAwesomeIcon icon="arrow-up" size="6x" color="deepskyblue"/>
                                        </Button>
                                    </div>
                                    <div className="col-12">
                                        <div className="row align-items-center">
                                            <div className="col-6">
                                                <h5 className="d-inline-flex display-4 temp-val">
                                                    {temp}
                                                </h5>
                                            </div>
                                            <div className="col-6">
                                                <Button
                                                    color="primary"
                                                    size="lg"
                                                    className="align-middle float-right"
                                                    disabled={temp > 28 || temp < 18}
                                                >
                                                    Submit 
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <Button
                                            color="light"
                                            onClick={this.decreaseTemp}
                                            className="btn-fix"
                                        >
                                            <FontAwesomeIcon icon="arrow-down" size="6x" color="deepskyblue"/>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
}

export default withRouter(VotePage)
