import React from "react";

function Table(props) {
    return (
        <div id="earthquakeData" className="col-6 p-0">
            <table className="table table-bordered m-0 p-0">
                <tr>
                    <th scope="row" className="text-center">Date</th>
                    <th scope="row" className="text-center">Time</th>
                </tr>
                <tr>
                    <td className="text-center">{props.date}</td>
                    <td className="text-center">{props.time}</td>
                </tr>
                <tr>
                    <th className="text-center">Location</th>
                    <th className="text-center">Depth</th>
                </tr>
                <tr>
                    <td className="text-center">{props.location}</td>
                    <td className="text-center">{props.depth}</td>
                </tr>
            </table>
        </div>
    )
}

export default Table;