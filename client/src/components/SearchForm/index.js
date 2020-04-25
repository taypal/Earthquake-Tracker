import React from "react";
import "./style.css";

function SearchForm() {
    return (

        <form id="searchForm" className="form-inline mx-auto mt-5">
            <input type="text" className="form-control mx-2" id="locationInput" placeholder="location"></input>
            <input type="text" className="form-control mx-2" id="magnitudeInput" placeholder="magnitude"></input>
            <input type="number" className="form-control mx-2" id="proximityInput" placeholder="proximity (km)"></input>
            <button type="submit" className="btn btn-secondary mx-2">Search</button>
        </form>

    )
}

export default SearchForm;