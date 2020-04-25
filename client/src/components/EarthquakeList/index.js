import React from "react";
import "./style.css";

function EarthquakeList(props) {
    return (
        <div id="quakeList" className="container-fluid my-5 p-5">
            {props.children}
        </div>
    )
}

export default EarthquakeList;