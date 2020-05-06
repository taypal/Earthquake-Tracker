import React from "react";
import "./style.css";

function EarthquakeList(props) {
    return (
        <div id="earthquakeList" className="container-fluid my-2 p-5">
            <div className="d-flex flex-wrap justify-content-center mt-5 mx-auto">
                {props.children}
            </div>
        </div>
    )
}

export default EarthquakeList;