// import React, { Component } from 'react';
// import auth0Client from '../Auth';

// class SignIn extends Component {
//     componentDidMount() {
//         if (!auth0Client.isAuthenticated()) {
//             auth0Client.signIn();
//         }
//     }
//     signOut = () => {
//         auth0Client.signOut();
//         this.props.history.replace('/');
//     }
//     render() {

//         return (
//             <div className="App" >
//                 <header className="App-header">
//                     {
//                         auth0Client.isAuthenticated() &&
//                         <div>
//                             <label className="mr-2 text-white">{auth0Client.getProfile().name}</label>
//                             <br />
//                             <button className="btn btn-dark" onClick={() => { this.signOut() }}>Sign Out</button>
//                         </div>
//                     }

//                 </header>
//             </div>
//         )
//     }

// }

// export default SignIn;