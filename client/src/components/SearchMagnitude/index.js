import React from "react";

function SearchMagnitude(props) {
    return (
        <input
            type="text"
            name={props.name}
            className="form-control mx-2"
            id="magnitudeInput"
            placeholder="magnitude"
        />
    )
}

export default SearchMagnitude;