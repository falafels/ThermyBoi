import React,{ Component } from 'react';
import {withRouter} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ApiService from "../api/ApiService";
import MapContainer from "./MapContainer";
import { Alert } from 'reactstrap';

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
            isLoaded: false,
            show: false,
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
                        <div className="row justify-content-center">
                            <h1>Select a Temperature and Submit!</h1>
                        </div>
                        <div className="">
                            <h2 className="mb-4"> You are in ITB!</h2>
                            <br/>
                        </div>
                        <div className="row h-100">
                            <div id="map-canvas" className="col-4">
                                { lon !== 0
                                &&
                                <MapContainer lon={lon} lat={lat} />
                                }
                            </div>
                            <div id="votingSystem" className="col-8">
                                <div className="row">
                                    <div className="col-8 justify-content-center center-block align-items-center">
                                        <div className="text-center">
                                        <Button
                                            color="light"
                                            onClick={this.increaseTemp}
                                            className="btn-fix"
                                        >
                                            <FontAwesomeIcon icon="arrow-up" size="6x" color="deepskyblue"/>
                                        </Button>
                                        </div>
                                        <div className="center_text">
                                                <h5 className="d-inline-flex display-4">
                                                    {temp}
                                                </h5>
                                        </div>
                                        <div className="text-center">
                                        <Button
                                            color="light"
                                            onClick={this.decreaseTemp}
                                            className="btn-fix"
                                        >
                                            <FontAwesomeIcon icon="arrow-down" size="6x" color="deepskyblue"/>
                                        </Button>
                                        </div>

                                    </div>
                                    <div className="col-4">
                                        <div className="row">
                                            <p>The current temperature in the room is: 24 degrees C</p>
                                        </div>
                                        <div className="row align-items-center">

                                            <div className="bottom">
                                                <Button
                                                    color="primary"
                                                    size="lg"
                                                    className="align-middle float-right"
                                                    disabled={temp > 28 || temp < 18 || this.state.show}
                                                    onClick={() => this.setState({ show: true })}>
                                                      Submit
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div>
                        <Alert isOpen={this.state.show} color="success" className="margin_top">
                            <h4 className="alert-heading">Your vote has been submitted!</h4>
                            <p>
                            Your vote has been included in updating the temperature for the selected room!
                            You can submit another vote in your next lecture time.
                            </p>
                        </Alert>
                        </div>

                    </div>
                </Container>
            </div>
        )
    }
}

export default withRouter(VotePage)
