import React from "react";
import { Link, withRouter } from "react-router-dom";
import auth0Client from "../../Auth"
import "./style.css";

function Navbar(props) {

    const signOut = () => {
        auth0Client.signOut();
        props.history.replace('/');
    };

    return (
        <div id="nav" className="container-fluid bg-dark">
            <div className="container">
                <div className="row">
                    <div className="d-flex col-12 col-md-4 justify-content-center justify-content-md-start">
                        <Link className="navbar-brand" to="./">
                            <img id="navLogo" className="pt-2" src="/assets/images/epicenterLogo2.png" alt="logo" />
                        </Link>
                    </div>
                    <div className="d-flex col-12 col-md-8 justify-content-center justify-content-md-end">
                        <ul className="nav pb-3 pt-3">
                            <li className="nav-item">
                                <Link to="./dashboard" className="px-3 align-middle text-white">Dashboard</Link>
                            </li>
                            {
                                !auth0Client.isAuthenticated() &&
                                <li className="nav-item">
                                    <a className="px-3 align-middle text-white" onClick={auth0Client.signIn}>Sign In</a>
                                </li>
                            }
                            {
                                auth0Client.isAuthenticated() &&
                                <li className="nav-item">
                                    <a className="px-3 align-middle text-white" onClick={() => { signOut() }}>Sign Out</a>
                                </li>
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default withRouter(Navbar);