import axios from "axios";

export default {

    // Axios functions for Plants
    getPlants: function () {
        return axios.get('/api/plants');
    },

    // Axios functions for users
    getUsers: function () {
        return axios.get('/gardeners');
    },

    // Axios functions for single user
    logoutUser: function () {
        return axios.post('/api/users/logout');
    },
    logInUser: function (body, header) {
        return axios.post('/api/users/', body, header);
    },
    signupUser: function (body, header) {
        return axios.post('/api/users/signup', body, header);
    },
    getUser: function () {
        return axios.get('/api/users');
    },
    updateUser: function (id) {
        return axios.put('/api/users/' + id);
    },
    deleteUser: function (id) {
        return axios.delete('/api/users/' + id);
    },


    // Axios functions for users' plants
    getOwnedPlants: function (id) {
        return axios.get('/api/owned-plants/' + id);
    },
    createOwnedPlants: function (id, body) {
        return axios.post('/api/owned-plants/' + id, body);
    },
    updateOwnedPlants: function (id) {
        return axios.put('/api/owned-plants/' + id);
    },
    deleteOwnedPlants: function (id) {
        return axios.delete('/api/owned-plants/' + id);
    },

    // Axios functions for trellis posts
    getTrellisPosts: function () {
        return axios.get('/api/trellis/');
    },
    createTrellisPost: function (id) {
        return axios.post('/api/trellis/' + id);
    },
    updateTrellisPost: function (id) {
        return axios.put('/api/trellis/' + id);
    },
    deleteTrellisPost: function (id) {
        return axios.delete('/api/trellis/' + id);
    },

    // Axios functions for trellis comments
    getTrellisComments: function () {
        return axios.get('/api/comments/');
    },
    createTrellisComment: function (id) {
        return axios.post('/api/comments/' + id);
    },
    updateTrellisComment: function (id) {
        return axios.put('/api/comments/' + id);
    },
    deleteTrellisComment: function (id) {
        return axios.delete('/api/comments/' + id);
    }

}