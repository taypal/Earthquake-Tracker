import React from "react";

function SearchProximity(props) {
    return (
        <input
            type="text"
            name={props.name}
            className="form-control mx-2"
            id="proximityInput"
            placeholder="proximity (km)"

        />
    )
}

export default SearchProximity;