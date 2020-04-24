import React from 'react';
// import './App.css';
import { Route } from 'react-router-dom';
import Callback from './Callback';
import Home from '../src/pages/Home';
import SignIn from '../src/pages/Signin'


function App() {

  return (
    <div className="App" >
      <Route exact path='/' component={Home} exact />
      <Route exact path='/callback' component={Callback} exact />
      <Route exact path='/signin' component={SignIn} exact />
    </div>
  )
}

export default App;
