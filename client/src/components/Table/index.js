import React from "react";

function Table() {
    return (
        <table className="table table-bordered m-0 p-0">
            <tr>
                <th scope="row" className="text-center">Date</th>
                <th scope="row" className="text-center">Time</th>
            </tr>
            <tr>
                <td className="text-center">4/19/20</td>
                <td className="text-center">3:00 pm</td>
            </tr>
            <tr>
                <th className="text-center">Location</th>
                <th className="text-center">Depth</th>
            </tr>
            <tr>
                <td className="text-center">9km NE of Magna</td>
                <td className="text-center">44 km</td>
            </tr>
        </table>
    )
}

export default Table;