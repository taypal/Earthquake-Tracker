import React from "react";
import Navbar from "../components/Navbar";
import EarthquakeCard from "../components/EarthquakeCard";
import EarthquakeList from "../components/EarthquakeList";

function Home() {
    return (
        <div>
            <Navbar />
            <EarthquakeList>
                <EarthquakeCard />
            </EarthquakeList>
        </div>
    )
}

export default Home;