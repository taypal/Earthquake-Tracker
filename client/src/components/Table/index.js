import React from "react";
import "./style.css";

function Table(props) {
    return (
        <div id="earthquakeData" className="col-12 p-0">
            <table className="table table-sm table-borderless m-0 p-0">
                <tr>
                    <td className="p-2 text-warning text-center"><s> ‎‏‏‎ ‎ ‎‏‏‎ ‎ ‎‏‏‎ ‎</s>‏‏‎ ‎‏‏‎ ‎Date‏‏‎ ‎‏‏‎ ‎<s> ‎‏‏‎ ‎ ‎‏‏‎ ‎ ‎‏‏‎ ‎</s>‏‏‎</td>
                </tr>
                <tr>
                    <td className="text-center text-light">{props.date}</td>
                </tr>
                <tr>
                    <td className="p-2 text-warning text-center"><s> ‎‏‏‎ ‎ ‎‏‏‎ ‎ ‎‏‏‎ ‎</s>‏‏‎ ‎‏‏‎ ‎Location ‎‏‏‎ ‎<s> ‎‏‏‎ ‎ ‎‏‏‎ ‎ ‎‏‏‎ ‎</s>‏‏‎</td>
                </tr>
                <tr>
                    <td className="text-center text-white">{props.location}</td>
                </tr>
                <tr>
                    <td className="p-2 text-warning text-center"><s> ‎‏‏‎ ‎ ‎‏‏‎ ‎ ‎‏‏‎ ‎</s>‏‏‎ ‎‏‏‎ Depth‏‏‎ ‎‏‏‎ ‎<s> ‎‏‏‎ ‎ ‎‏‏‎ ‎ ‎‏‏‎ ‎</s>‏‏‎</td>
                </tr>
                <tr>
                    <td className="text-center text-white">{props.depth}</td>
                </tr>
            </table>
        </div>
    )
}

export default Table;