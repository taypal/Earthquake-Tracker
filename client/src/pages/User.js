import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Navbar from "../components/Navbar";
import EarthquakeList from "../components/EarthquakeList";
import EarthquakeCard from "../components/EarthquakeCard";
import Magnitude from "../components/Magnitude";
import Table from "../components/Table";
import API from "../utils/API";

function User() {


    var quakeList = [];
    const [earthquakeState, setEarthquakeState] = useState([]);
    const [queryState, setQueryState] = useState({
        magnitude: 2.5,
        latitude: 41,
        longitude: -112,
        proximity: 100
    })

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
                        time: res.data.features[i].properties.time
                    })
                }
                return quakeList
            })
            .then(quakeList => {
                setEarthquakeState(quakeList)
            })
    }, [])

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data, event) => {
        event.preventDefault();
        console.log("form submitted")
        setQueryState(data)
    }


    return (
        <div>
            <Navbar />

            <form id="searchForm" className="form-inline mx-auto mt-5" onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="text"
                    name="latitude"
                    className="form-control mx-2"
                    id="latitudeInput"
                    placeholder="latitude"
                    ref={register}
                />
                <input
                    type="text"
                    name="longitude"
                    className="form-control mx-2"
                    id="longitudeInput"
                    placeholder="longitude"
                    ref={register}
                />
                <input
                    type="text"
                    name="magnitude"
                    className="form-control mx-2"
                    id="lmagnitudeInput"
                    placeholder="magnitude"
                    ref={register}
                />
                <input
                    type="text"
                    name="proximity"
                    className="form-control mx-2"
                    id="proximityInput"
                    placeholder="proximity (km)"
                    ref={register}
                />
                <button
                    type="submit" className="btn btn-secondary mx-2"
                >Submit</button>
            </form>
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

export default User;