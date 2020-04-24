import React from "react";

function SearchForm() {
    return (
        <form className="form-inline">
            <input type="text" className="form-control" id="locationInput" placeholder="location"></input>
            <input type="text" className="form-control" id="magnitudeInput" placeholder="magnitude"></input>
            <input type="number" className="form-control" id="proximityInput" placeholder="proximity (km)"></input>
            <button type="submit" className="btn">Submit</button>
        </form>
    )
}

export default SearchForm;