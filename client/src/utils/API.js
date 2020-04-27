import axios from "axios";


const path = require("path");
const router = require("express").Router();
const apiRoutes = require("../../../routes/api");

router.use("/api", apiRoutes);
router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../../public/index.html"));

});

module.exports = router;

export default {

    findAll: function () {
        return axios.get("/api");
    },
    // test API call for development
    getEarthquakes: function () {
        return axios.get("https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&minmagnitude=6.0");
    }
};