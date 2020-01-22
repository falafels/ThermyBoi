import React, {Fragment, Component } from 'react';
import {withRouter} from 'react-router-dom';

import Content from "./Content";


export class Home extends Component {

    render() {
        return (
            <Fragment>
                <Content />
            </Fragment>
        )
    }
}

export default withRouter(Home)
