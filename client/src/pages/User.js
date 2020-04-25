import React from "react";
import Navbar from "../components/Navbar";
import EarthquakeList from "../components/EarthquakeList";
import SearchForm from "../components/SearchForm";
import EarthquakeCard from "../components/EarthquakeCard";

function User() {
    return (
        <div>
            <Navbar />
            <SearchForm />
            <EarthquakeList>
                <EarthquakeCard />
            </EarthquakeList>
        </div>
    )
}

export default User;