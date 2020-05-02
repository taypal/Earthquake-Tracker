import axios from "axios";


export default {

    findAll: function () {
        return axios.get("/api/users");
    },
    createUser: function (profile) {
        return axios.post("/api/users", profile)
    },
    addEarthquakes: function (profile, query) {
        return axios.post("/api/users", { email: profile, ...query })
    },
    // test API call for development
    getEarthquakes: function () {
        return axios.get("https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&minmagnitude=6.0");
    },
    getUserEarthquakes: function (mag, lat, long, prox) {
        return axios.get("https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&limit=10&minmagnitude=" + mag + "&longitude=" + long + "&latitude=" + lat + "&maxradiuskm=" + prox);
    }
};

