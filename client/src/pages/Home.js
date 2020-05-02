import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import EarthquakeList from "../components/EarthquakeList";
import EarthquakeCard from "../components/EarthquakeCard";
import Magnitude from "../components/Magnitude";
import Table from "../components/Table";
import Map from "../components/Map";
import API from "../utils/API";

// import GMap from '../components/googleMap';

function Home() {

    var quakeList = [];
    const [earthquakeState, setEarthquakeState] = useState([]);

    // Load all load earthquake data and set state
    useEffect(() => {
        API.getEarthquakes()
            .then(res => {
                for (var i = 0; i < 5; i++) {
                    quakeList.push({
                        magnitude: res.data.features[i].properties.mag,
                        date: res.data.features[i].properties.time,
                        location: res.data.features[i].properties.place,
                        depth: res.data.features[i].geometry.coordinates[2] + " km",
                        time: res.data.features[i].properties.time
                    })
                }
                return quakeList
            })
            .then(quakeList => {
                setEarthquakeState(quakeList)
            })
    })

    return (
        <div>
            <Navbar />
            <EarthquakeList>
                {earthquakeState.map(quake => {
                    return (
                        <EarthquakeCard>
                            <Magnitude
                                magnitude={quake.magnitude}
                            />
                            <Table
                                date={quake.date}
                                time={quake.time}
                                location={quake.location}
                                depth={quake.depth}
                            />
                            <Map />
                        </EarthquakeCard>
                    );
                })}

            </EarthquakeList>
        </div>
    )
}

export default Home;