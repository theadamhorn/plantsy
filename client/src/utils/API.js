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
    logInUser: function ( body, header) {
        return axios.post('/api/users/', body, header);
    },
    signupUser: function ( body, header) {
         axios.fetch('/api/users/signup', body, header);
    },
    logoutUser: function (body , header) {
         axios.post('/api/users/logout');
    },
    updateUser: function (id) {
        return axios.put('/api/users/' + id);
    },
    deleteUser: function (id) {
        return axios.delete('/api/users/' + id);
    },

    // Axios functions for users' plants
    getOwnedPlants: function (id) {
        return axios.get('/api/owned-plants' + id);
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