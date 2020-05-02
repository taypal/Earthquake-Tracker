import React from "react";
import "./style.css";

function SearchForm(props) {

    return (

        <form id="searchForm" className="form-inline mx-auto mt-5">
            {props.children}
        </form>
    )
}

export default SearchForm;