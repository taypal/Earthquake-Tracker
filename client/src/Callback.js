import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import auth0Client from './Auth';

class Callback extends Component {
    render() {
        return (
            <p>Loading profile...</p>
        );
    }

    async componentDidMount() {
        await auth0Client.handleAuthentication();
        this.props.history.replace('/dashboard');
    }
}





export default withRouter(Callback);