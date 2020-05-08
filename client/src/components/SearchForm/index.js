import React from "react";
import "./style.css";

function SearchForm(props) {

    return (

        <div id="searchForm" className="d-flex flex-wrap justify-content-center justify-content-md-between">
            {props.children}
        </div>
    )
}

export default SearchForm;