import React from "react";
import Navbar from "../components/Navbar";
import EarthquakeList from "../components/EarthquakeList";
import EarthquakeCard from "../components/EarthquakeCard";

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