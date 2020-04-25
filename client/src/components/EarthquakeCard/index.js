import React from "react";
import Magnitude from "../Magnitude";
import Table from "../Table";
import Map from "../Map";
import "./style.css";

function EarthquakeCard() {
    return (
        <div id="earthquakeCard" className="container mx-auto">
            <div className="row">
                <div id="magnitude" className="col-3 p-0">
                    <Magnitude />
                </div>
                <div id="earthquakeData" className="col-6 p-0">
                    <Table />
                </div>
                <div id="googleMap" className="col-3 p-0">
                    <Map />
                </div>
            </div>
        </div>
    )
};

export default EarthquakeCard;