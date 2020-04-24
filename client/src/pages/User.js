import React from "react";
import Navbar from "../components/Navbar";
import EarthquakeList from "../components/EarthquakeList";
import SearchForm from "../components/SearchForm";

function User() {
    return (
        <div>
            <Navbar />
            <SearchForm />
            <EarthquakeList />
        </div>
    )
}

export default User;