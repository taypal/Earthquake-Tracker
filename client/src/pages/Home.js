import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import EarthquakeList from "../components/EarthquakeList";
import EarthquakeCard from "../components/EarthquakeCard";
import Magnitude from "../components/Magnitude";
import Table from "../components/Table";
import Map from "../components/Map";
import API from "../utils/API";


function Home() {

    const [earthquakeState, setEarthquakeState] = useState({});

    // Load all load earthquake data and set state
    useEffect(() => {
        API.getMagna()
            .then(res =>
                setEarthquakeState({
                    magnitude: res.data.features[0].properties.mag,
                    date: res.data.features[0].properties.time,
                    location: res.data.features[0].properties.place,
                    depth: res.data.features[0].geometry.coordinates[2] + " km",
                    time: res.data.features[0].properties.time
                })
            )
    }, [])



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