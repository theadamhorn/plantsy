import axios from "axios";

const id = ""; // << Make sure to delete this once defined in functions

export default {

    // Axios functions for Plants
    getPlants: function () {
        return axios.get('/api/plants');
    },

    // Axios functions for users
    getUsers: function () {
        return axios.get('/api/users');
    },

    // Axios functions for single user
    createUser: function () {
        return axios.post('/api/users/' + id);
    },
    updateUser: function () {
        return axios.put('/api/users/' + id);
    },
    deleteUser: function () {
        return axios.delete('/api/users/' + id);
    },

    // Axios functions for users' plants
    getOwnedPlants: function () {
        return axios.get('/api/owned-plants');
    },
    createOwnedPlants: function () {
        return axios.post('/api/owned-plants/' + id); // Not sure if 'id' is correct name for this
    },
    updateOwnedPlants: function () {
        return axios.put('/api/owned-plants/' + id); // Not sure if 'id' is correct name for this
    },
    deleteOwnedPlants: function () {
        return axios.delete('/api/owned-plants/' + id); // Not sure if 'id' is correct name for this
    }

}