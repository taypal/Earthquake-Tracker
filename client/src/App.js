import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import auth0Client from './Auth';
import Callback from './Callback';
import Home from '../src/pages/Home';
import User from '../src/pages/User';
import SecuredRoute from './SecuredRoute';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkingSession: true,
    }
  }

  async componentDidMount() {
    if (this.props.location.pathname == '/callback') {
      this.setState({ checkingSession: false });
      return;
    }
    try {
      await auth0Client.silentAuth();
      this.forceUpdate();
    } catch (err) {
      if (err.error !== 'login_required') console.log(err.error);
    }
    this.setState({ checkingSession: false });
  }

  render() {
    return (
      <div className="App" >
        <Route exact path='/' component={Home} />
        <Route path='/callback' component={Callback} />
        <SecuredRoute path='/dashboard' component={User} checkingSession={this.state.checkingSession} />
      </div>
    )
  }
}

export default withRouter(App);
