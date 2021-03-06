import React,{ Component } from 'react';
import {withRouter} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ApiService from "../api/ApiService";
import MapContainer from "./MapContainer";
import { Alert } from 'reactstrap';
import { Auth0Context } from "../react-auth0-spa";
import config from "../auth_config.json";

import {
    Button, Container,
} from "reactstrap";



export class VotePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentTemp: 23,
            setTemp: 23,
            temp: 23,
            lon: 0,
            lat: 0,
            isLoaded: false,
            show: false,
            access_token: config.tokId
        }

        this.apiService = new ApiService();
    }

    componentDidMount = () => {
        this.getSetTemp();
        this.getCurrentTemp();
        this.intervalId = setInterval(() => this.getSetTemp(),30000);
        this.intervalId2 = setInterval(() => this.getCurrentTemp(),30000);
        this.getLocation();
    }

    componentWillUnmount(){
        clearInterval(this.intervalId);
        clearInterval(this.intervalId2);
      }

    getSetTemp = () => {
        this.apiService.getTemp()
        .then(response => response.data)
        .then(data => {
            this.setState({
                setTemp: data,
                isLoaded: true
            });
        })
        .catch(err => console.log(err))
    }

    getCurrentTemp = () => {
        this.apiService.getCurrentTemp()
        .then(response => response.data)
        .then(data => {
            this.setState({
                currentTemp: data,
                temp: data,
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

    submitTemp = () => {
        this.apiService.postTemp(this.state.temp, this.state.access_token)
        .then(() => {
            this.setState({
                show: true,
            });
            this.getCurrentTemp();
        })
        .catch(err => console.log(err));
        this.getCurrentTemp();
    }
 
    render() {
        var {lon, lat} = this.state; 

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
                                            disabled={this.state.temp >= 28}
                                        >
                                            <FontAwesomeIcon icon="arrow-up" size="6x" color="#007bff"/>
                                        </Button>
                                        </div>
                                        <div className="center_text">
                                                <h5 className="d-inline-flex display-4">
                                                    {this.state.temp}
                                                </h5>
                                        </div>
                                        <div className="text-center">
                                        <Button
                                            color="light"
                                            onClick={this.decreaseTemp}
                                            className="btn-fix"
                                            disabled={this.state.temp <= 18}
                                        >
                                            <FontAwesomeIcon icon="arrow-down" size="6x" color="#007bff"/>
                                        </Button>
                                        </div>

                                    </div>
                                    <div className="col-4">
                                        <div className="row">
                                            <p>The current temperature in the room is:</p>
                                            <p>{this.state.currentTemp} degrees C</p>
                                        </div>
                                        <div className="row">
                                            <p>The room will be set to:</p>
                                            <p>{this.state.setTemp} degrees C</p>
                                        </div>
                                        <div className="row align-items-center">

                                            <div className="bottom">
                                                <Button
                                                    color="primary"
                                                    size="lg"
                                                    className="align-middle float-right"
                                                    disabled={this.state.temp > 28 || this.state.temp < 18 || this.state.show}
                                                    onClick={this.submitTemp}>
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

VotePage.contextType = Auth0Context;

export default withRouter(VotePage)
