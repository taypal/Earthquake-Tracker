import React from "react";
import "./style.css";

function SearchForm(props) {

    return (

        <div id="searchForm" className="d-flex justify-content-center justify-content-sm-between">
            {props.children}
        </div>
    )
}

export default SearchForm;