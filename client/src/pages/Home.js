import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import EarthquakeList from "../components/EarthquakeList";
import EarthquakeCard from "../components/EarthquakeCard";
import Magnitude from "../components/Magnitude";
import Table from "../components/Table";
import API from "../utils/API";
import Title from "../components/Title";
import Mapcomp from "../components/Mapcomp";

var moment = require("moment");

function Home() {

    var quakeList = [];
    var markerList = [];
    const iconList = {
        icon1: 'https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/256/Map-Marker-Flag--Right-Chartreuse.png',
        icon2: 'https://cdn2.iconfinder.com/data/icons/IconsLandVistaMapMarkersIconsDemo/256/MapMarker_Marker_Outside_Chartreuse.png'
    }
    const [earthquakeState, setEarthquakeState] = useState([]);


    // Load all load earthquake data and set state
    useEffect(() => {
        API.getEarthquakes()
            .then(res => {
                for (var i = 0; i < res.data.features.length; i++) {
                    var momentTime = moment(res.data.features[i].properties.time).format('MMMM Do YYYY, h:mm a')
                    quakeList.push({
                        magnitude: res.data.features[i].properties.mag,
                        date: momentTime,
                        location: res.data.features[i].properties.place,
                        depth: res.data.features[i].geometry.coordinates[2] + " km"
                    })
                    markerList.push({
                        lat: res.data.features[i].geometry.coordinates[1],
                        long: res.data.features[i].geometry.coordinates[0],
                        icon: iconList.icon1
                    })

                    console.log(markerList)
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
                title="Earthquake Tracker"
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