import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Navbar from "../components/Navbar";
import EarthquakeList from "../components/EarthquakeList";
import EarthquakeCard from "../components/EarthquakeCard";
import Magnitude from "../components/Magnitude";
import Table from "../components/Table";
import Usgs from "../components/Usgs";
import API from "../utils/API";
import auth0Client from '../Auth';


function User() {



    var quakeList = [];
    const [earthquakeState, setEarthquakeState] = useState([]);
    const [queryState, setQueryState] = useState({
        magnitude: 2.5,
        latitude: 41,
        longitude: -112,
        proximity: 100
    })

    useEffect(() => {
        // Run! Like go get some data from an API.
        async function fetchUser() {
            if (auth0Client.getProfile()) {
                var profile = auth0Client.getProfile().name.toString()
                console.log(profile)
                var user = await API.createUser({
                    email: profile,
                })
                console.log(user)
            }
        }
        fetchUser()
    }, []);


    // Load all load earthquake data and set state
    useEffect(() => {
        console.log(queryState);
        API.getUserEarthquakes(queryState.magnitude, queryState.latitude, queryState.longitude, queryState.proximity)
            .then(res => {
                for (var i = 0; i < res.data.features.length; i++) {
                    quakeList.push({
                        magnitude: res.data.features[i].properties.mag,
                        date: res.data.features[i].properties.time,
                        location: res.data.features[i].properties.place,
                        depth: res.data.features[i].geometry.coordinates[2] + " km",
                        time: res.data.features[i].properties.time,
                        url: res.data.features[i].properties.url
                    })
                }
                return quakeList
            })
            .then(quakeList => {
                setEarthquakeState(quakeList)
                quakeList = [];
            })
    }, [queryState])

    const { register, handleSubmit } = useForm();

    const onSubmit = (data, event) => {
        event.preventDefault();
        console.log("form submitted")
        setQueryState(data);
    }


    return (
        <div>
            <Navbar />
            <form id="searchForm" className="form-inline mx-auto mt-5" onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="number"
                    min="-90"
                    max="90"
                    required="required"
                    name="latitude"
                    className="form-control mx-2"
                    id="latitudeInput"
                    placeholder="lat"
                    ref={register}
                />
                <input
                    type="number"
                    min="-180"
                    max="180"
                    name="longitude"
                    required="required"
                    className="form-control mx-2"
                    id="longitudeInput"
                    placeholder="long"
                    ref={register}
                />
                <input
                    type="number"
                    min="1"
                    max="9"
                    required="required"
                    name="magnitude"
                    className="form-control mx-2"
                    id="lmagnitudeInput"
                    placeholder="mag"
                    ref={register}
                />
                <input
                    type="number"
                    min="0"
                    required="required"
                    name="proximity"
                    className="form-control mx-2"
                    id="proximityInput"
                    placeholder="proximity (km)"
                    ref={register}
                />
                <button
                    type="submit" className="btn btn-secondary mx-2"
                >Update Search</button>
            </form>

            <EarthquakeList>
                {earthquakeState[0] ? (
                    earthquakeState.map(quake => {
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
                                <Usgs url={quake.url} />
                            </EarthquakeCard>
                        );
                    })) : (<h3 className="text-center text-black mt-3">No records found</h3>)
                }
            </EarthquakeList>
        </div>
    )
}

export default User;