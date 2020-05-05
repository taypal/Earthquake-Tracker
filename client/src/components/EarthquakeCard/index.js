import React from "react";
import "./style.css";

function EarthquakeCard(props) {
    return (
        <div id="earthquakeCard" className="border border-warning rounded container p-2 m-2">
            <div className="row">
                {props.children}
            </div>
        </div>
    )
};

export default EarthquakeCard;