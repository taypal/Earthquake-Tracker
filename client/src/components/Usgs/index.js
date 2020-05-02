import React from "react";


function Usgs(props) {
    return (
        <div id="googleMap" className="col-3 p-0">
            <a href={props.url}><button className="btn btn-secondary">USGS Data</button></a>
        </div>
    )
}

export default Usgs;