import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

export class Directory extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount = () => {

    }

    signOut = () => {
        var auth2 = window.gapi.auth2.getAuthInstance();
        auth2.signOut().then(function () {
          console.log('User signed out.');
        });
        this.props.history.push('/login');
    }

    render() {
        return (
            <div>
                <p>
                    LOGGED IN !!!
                </p>
                <button onClick={this.signOut}>Sign Out</button>
            </div>
        )
    }
}

export default withRouter(Directory)
