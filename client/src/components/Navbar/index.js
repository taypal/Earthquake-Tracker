import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
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
                                <Link to="./dashboard" className="px-3 align-middle text-white">dashboard</Link>
                            </li>
                            <li className="nav-item">
                                <a href="/signin" className="px-3 align-middle text-white">Sign-In</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Navbar;