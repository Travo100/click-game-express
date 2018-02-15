import axios from "axios";

export default {
    getChihuahuas: function() {
        return axios.get("/api/chihuahua");
    },
    saveChihuahua: function(chihuahuaData) {
        return axios.post("/api/chihuahua", chihuahuaData);
    }
}