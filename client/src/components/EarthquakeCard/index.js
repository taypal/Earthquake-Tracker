import React from "react";
import Magnitude from "../Magnitude";
import Table from "../Table";
import Map from "../Map";

function EarthquakeCard() {
    return (
        <div id="earthquakeCard" className="row">
            <div id="magnitude" className="col-3">
                <Magnitude />
            </div>
            <div id="earthquakeData" className="col-6">
                <Table />
            </div>
            <div id="googleMap" className="col-3">
                <Map />
            </div>
        </div>
    )
};

export default EarthquakeCard;