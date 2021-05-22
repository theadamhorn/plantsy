import React from "react";


const AuthContext = React.createContext({
    authData: {

        isAuthenticated: false,
        loading: false,
        user: null,
        
    },
    setAuth: () => {},
});
export default AuthContext;