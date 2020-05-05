import React from "react";
import "./style.css";


function Magnitude(props) {

    return (
        <div id="magnitude" className="col-12 p-0">
            <table className="table table-borderless m-0 p-0">
                <tr>
                    <td className="p-2 text-warning text-center"><s> ‎‏‏‎ ‎ ‎‏‏‎ ‎ ‎‏‏‎ ‎</s>‏‏‎ ‎‏‏‎ ‎Magnitude ‎‏‏‎ ‎<s> ‎‏‏‎ ‎ ‎‏‏‎ ‎ ‎‏‏‎ ‎</s>‏‏‎</td>
                </tr>
                <tr>
                    <th id="mag" className="text-center text-light">{props.magnitude}</th>
                </tr>
            </table>
        </div>
    )
}

export default Magnitude;


