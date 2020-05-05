import React from "react";


function Usgs(props) {
    return (
        <div id="usgsButton" className="col-3 pb-0">
            <a href={props.url}><button className="btn btn-sm btn-outline-warning text-warning">usgs</button></a>
        </div>
    )
}

export default Usgs;