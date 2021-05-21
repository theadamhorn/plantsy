import axios from "axios";

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
    createUser: function (id) {
        return axios.post('/api/users/' + id);
    },
    updateUser: function (id) {
        return axios.put('/api/users/' + id);
    },
    deleteUser: function (id) {
        return axios.delete('/api/users/' + id);
    },

    // Axios functions for users' plants
    getOwnedPlants: function () {
        return axios.get('/api/owned-plants');
    },
    createOwnedPlants: function (id) {
        return axios.post('/api/owned-plants/' + id); // Not sure if 'id' is correct name for this
    },
    updateOwnedPlants: function (id) {
        return axios.put('/api/owned-plants/' + id); // Not sure if 'id' is correct name for this
    },
    deleteOwnedPlants: function (id) {
        return axios.delete('/api/owned-plants/' + id); // Not sure if 'id' is correct name for this
    }

}