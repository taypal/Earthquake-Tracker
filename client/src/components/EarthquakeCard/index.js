import React from "react";
import "./style.css";

function EarthquakeCard(props) {
    return (
        <div id="earthquakeCard" className="container mx-auto">
            <div className="row">
                {props.children}
            </div>
        </div>
    )
};

export default EarthquakeCard;