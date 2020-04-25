import React from "react";
import "./style.css";

function Magnitude(props) {
    return (
        <div id="magnitude" className="col-3 p-0">
            <table className="table m-0 p-0">
                <tr>
                    <th className="text-center">Magnitude</th>
                </tr>
                <tr>
                    <td id="mag" className="text-center">{props.magnitude}</td>
                </tr>
            </table>
        </div>
    )
}

export default Magnitude;