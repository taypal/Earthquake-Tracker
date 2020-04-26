import React from "react";
import Navbar from "../components/Navbar";
import EarthquakeList from "../components/EarthquakeList";
import SearchForm from "../components/SearchForm";
import EarthquakeCard from "../components/EarthquakeCard";
import Magnitude from "../components/Magnitude";
import Table from "../components/Table";
import Map from "../components/Map";


function User() {

    return (
        <div>
            <Navbar />

            <SearchForm />
            <EarthquakeList>
                <EarthquakeCard>
                    <Magnitude
                        magnitude="6.0"
                    />
                    <Table
                        date="4/11/2019"
                        time="12:34 pm"
                        location="3km west of Salt Lake City"
                        depth="19km"
                    />
                    <Map />
                </EarthquakeCard>
            </EarthquakeList>
        </div>
    )
}

export default User;