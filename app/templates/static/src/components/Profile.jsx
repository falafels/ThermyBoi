import React,{ Component, useState, useEffect, useContext } from "react";
import {withRouter} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ApiService from "../api/ApiService";
import { useAuth0, Auth0Context } from "../react-auth0-spa";

import {
   Container,
} from "reactstrap";

export class Profile extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            setTemp: 23,
            user: {}
        }

        this.apiService = new ApiService();
    }

    componentDidMount = () => {
        let ctx = this.context;
        this.getSetTemp();
        ctx.getTokenSilently().then((result) => {
            console.log(result);
        });
    }


    getSetTemp = () => {
        this.apiService.getTemp()
        .then(response => response.data)
        .then(data => {
            this.setState({
                setTemp: data,
            });
        })
        .catch(err => console.log(err))
    }
 
    render() {
        let user = this.context.user;

        return (
            <div>
                <Container>
                    <div>
                        <div className="row justify-content-center">
                            <h1>Welcome {user.given_name}</h1>
                        </div>
                        <div className="row justify-content-center">
                            <h3>Last entry was {this.state.setTemp}</h3>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
}

Profile.contextType = Auth0Context;

export default withRouter(Profile)
