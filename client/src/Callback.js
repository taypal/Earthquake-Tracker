import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import auth0Client from './Auth';

class Callback extends Component {



    render() {
        console.log("callback is working")
        return (

            <p>Loading profile...</p>

        );
    }

    async componentDidMount() {
        console.log("mounted")
        await auth0Client.handleAuthentication();
        this.props.history.replace('/dashboard');
    }
}





export default withRouter(Callback);