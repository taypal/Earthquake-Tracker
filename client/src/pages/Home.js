import React from "react";
import Navbar from "../components/Navbar";
import EarthquakeList from "../components/EarthquakeList";

function Home() {
    return (
        <div>
            <Navbar />
            <EarthquakeList />
        </div>
    )
}

export default Home;