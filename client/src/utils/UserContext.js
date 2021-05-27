import React, { createContext, useState, useContext } from "react";

const UserContext = createContext({
  user: {
    id: null,
    name: null,
    email: null,
    isAuthenticated: false
  },

  login: () => { },
  logout: () => { }


});

export default UserContext;