import axios from "axios";


export default {

    findAll: function () {
        return axios.get("/api/users");
    },
    findUser: function (profile) {
        return axios.get("/api/users/" + profile);
    },
    createUser: function (profile) {
        return axios.post("/api/users", profile)
    },
    addEarthquakes: function (profile, query) {
        return axios.post("/api/users", { email: profile, ...query })
    },
    // test API call for development
    getEarthquakes: function () {
        return axios.get("https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&limit=12&starttime=2000-01-01&minmagnitude=8.0");
    },
    getUserEarthquakes: function (mag, lat, long, prox) {
        return axios.get("https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&limit=12&starttime=2000-01-01&minmagnitude=" + mag + "&longitude=" + long + "&latitude=" + lat + "&maxradiuskm=" + prox);
    }
};

