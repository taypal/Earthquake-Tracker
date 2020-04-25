import React, { useState } from "react";
import Navbar from "../components/Navbar";
import EarthquakeList from "../components/EarthquakeList";
import EarthquakeCard from "../components/EarthquakeCard";
import Magnitude from "../components/Magnitude";
import Table from "../components/Table";
import Map from "../components/Map";

function Home() {

    const [earthquakeState, setEarthquakeState] = useState({
        magnitude: 5.4,
        date: "4/11/2019",
        location: "3km west of Salt Lake City",
        depth: "19km",
        time: "2:41 pm"
    });


    return (
        <div>
            <Navbar />
            <EarthquakeList>
                <EarthquakeCard>
                    <Magnitude
                        magnitude={earthquakeState.magnitude}
                    />
                    <Table
                        date={earthquakeState.date}
                        time={earthquakeState.time}
                        location={earthquakeState.location}
                        depth={earthquakeState.depth}
                    />
                    <Map />
                </EarthquakeCard>
            </EarthquakeList>
        </div>
    )
}

export default Home;