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
import SearchForm from "../components/SearchForm";
import Results from "../components/Results";



var profile = ""


function User() {



    var quakeList = [];
    const [earthquakeState, setEarthquakeState] = useState([]);
    const [queryState, setQueryState] = useState({
        magnitude: 2.5,
        latitude: 41,
        longitude: -112,
        proximity: 100,
        initial: true
    })

    async function fetchUserDefault() {
        var testUser = await API.findUser(profile);
        console.log(testUser.data);
        var userData = testUser.data || {};
        userData.initial = false;
        setQueryState(userData)

    }



    useEffect(() => {
        // Run! Like go get some data from an API.
        async function fetchUser() {
            if (auth0Client.getProfile()) {
                profile = auth0Client.getProfile().name.toString()
                console.log(profile)
                var user = await API.createUser({
                    email: profile,
                })
                console.log(user)
            }
        }
        fetchUser()
    }, []);

    useEffect(() => {
        fetchUserDefault()
    }, [])

    // Load all load earthquake data and set state
    useEffect(() => {
        if (!queryState.initial) {
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
        }


    }, [queryState])

    const { register, handleSubmit } = useForm();

    async function onSubmit(data, event) {
        event.preventDefault();
        console.log("form submitted")
        setQueryState(data);
        console.log(profile);
        var userQuery = await API.addEarthquakes(profile, data)
        console.log(userQuery);
    }


    return (
        <div>
            <Navbar />
            <SearchForm>
                <form id="searchForm" className="form align-items-center" onSubmit={handleSubmit(onSubmit)}>
                    <input
                        className="form-control border-warning border-top-0 border-left-0 border-right-0 rounded-0 bg-transparent text-light text-center"
                        type="number"
                        min="-90"
                        max="90"
                        required="required"
                        name="latitude"
                        id="latitudeInput"
                        placeholder="latitude"
                        ref={register}
                    />
                    <input
                        className="form-control border-warning border-top-0 border-left-0 border-right-0 rounded-0 bg-transparent text-light text-center"
                        type="number"
                        min="-180"
                        max="180"
                        name="longitude"
                        required="required"
                        id="longitudeInput"
                        placeholder="longitude"
                        ref={register}
                    />
                    <input
                        className="form-control border-warning border-top-0 border-left-0 border-right-0 rounded-0 bg-transparent text-light text-center"
                        type="number"
                        min="1"
                        max="9"
                        required="required"
                        name="magnitude"
                        id="lmagnitudeInput"
                        placeholder="magnitude"
                        ref={register}
                    />
                    <input
                        className="form-control border-warning border-top-0 border-left-0 border-right-0 rounded-0 bg-transparent text-light text-center"
                        type="number"
                        min="0"
                        required="required"
                        name="proximity"
                        id="proximityInput"
                        placeholder="proximity (km)"
                        ref={register}
                    />
                    <button
                        type="submit" className="btn btn-sm btn-block btn-outline-secondary mt-2 text-white"
                    >Update Search</button>
                </form>



            </SearchForm>

            <Results
                lat={queryState.latitude}
                long={queryState.longitude}
                mag={queryState.magnitude}
                prox={queryState.proximity}
            />

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
                    })) : (<h3 className="text-center text-black mt-3 text-warning">No records found</h3>)
                }
            </EarthquakeList>
        </div >
    )
}

export default User;