import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import EarthquakeList from "../components/EarthquakeList";
import SearchForm from "../components/SearchForm";
import EarthquakeCard from "../components/EarthquakeCard";
import Magnitude from "../components/Magnitude";
import Table from "../components/Table";
import Map from "../components/Map";
import API from "../utils/API";
import auth0Client from '../Auth';



function User() {

    useEffect(() => {
        // Run! Like go get some data from an API.
        async function fetchUser() {
            if (auth0Client.getProfile()) {
                var profile = auth0Client.getProfile().name.toString()
                console.log(profile)
                var user = await API.createUser({
                    email: profile,
                })
                var test = await API.findAll()
                console.log(test)
                console.log(user)

            }
            var test = await API.findAll()
            console.log(test)

        }
        fetchUser()
    }, []);


    var query = {
        // Insert search parameters from database
        magnitude: 2.5,
        latitude: 41,
        longitude: -112,
        proximity: 100
    }
    var quakeList = [];
    const [earthquakeState, setEarthquakeState] = useState([]);

    // Load all load earthquake data and set state
    useEffect(() => {
        API.getUserEarthquakes(query.magnitude, query.latitude, query.longitude, query.proximity)
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
    })


    return (
        <div>
            <Navbar />

            <SearchForm />
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

export default User;