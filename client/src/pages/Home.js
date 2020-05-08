import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import EarthquakeList from "../components/EarthquakeList";
import EarthquakeCard from "../components/EarthquakeCard";
import Magnitude from "../components/Magnitude";
import Table from "../components/Table";
import API from "../utils/API";
import Title from "../components/Title";
import Mapcomp from "../components/Mapcomp";

function Home() {

    var quakeList = [];
    const [earthquakeState, setEarthquakeState] = useState([]);

    // Load all load earthquake data and set state
    useEffect(() => {
        API.getEarthquakes()
            .then(res => {
                for (var i = 0; i < res.data.features.length; i++) {
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
    }, [])

    return (
        <div>
            <Navbar />
            <Title
                title="Insert Title Here"
            />
            <Mapcomp />

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
                        </EarthquakeCard>
                    );
                })}

            </EarthquakeList>



        </div>
    )
}

export default Home;