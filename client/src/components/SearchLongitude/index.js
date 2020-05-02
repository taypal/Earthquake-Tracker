import React from "react";

function SearchLongitude(props) {
    return (
        <input
            type="text"
            name={props.name}
            className="form-control mx-2"
            id="longitudeInput"
            placeholder="longitude"

        />
    )
}

export default SearchLongitude;