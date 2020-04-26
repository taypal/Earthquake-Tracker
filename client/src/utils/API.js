import axios from "axios";

export default {

    findAll: function () {
        return axios.get("/api");
    },
    // test API call for development
    getMagna: function () {
        return axios.get("https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&latitude=40&longitude=-112&minmagnitude=3.0&maxradiuskm=100&starttime=2020-03-17");
    }
};