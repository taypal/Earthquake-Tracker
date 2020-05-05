import React from "react";
import "./style.css";

function Results(props) {
    return (
        <div className="mt-5">
            <h3 className="text-center text-light">Recent Earthquakes</h3>
            <div className="d-flex justify-content-center col-12 p-0">
                <table id="results" className="table table-sm table-borderless m-0 p-0">
                    <tr>
                        <th className="p-2 text-warning text-center">Latitude</th>
                        <th className="p-2 text-warning text-center">Longtiude</th>
                        <th className="p-2 text-warning text-center">Magnitude</th>
                        <th className="p-2 text-warning text-center">Proximity</th>
                    </tr>
                    <tr>
                        <td className="text-center text-light">{props.lat}°</td>
                        <td className="text-center text-light">{props.long}°</td>
                        <td className="text-center text-light">{props.mag}</td>
                        <td className="text-center text-light">{props.prox} km</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Results;