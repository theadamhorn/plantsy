import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Private = ({ component: Component, ...rest }) => {

  const {user} = useContext(UserContext)
  
  return (
    <Route
      {...rest}
      render={(props) =>
        !user.isAuthenticated  ? (
          <Redirect to="/" />
        ) : (
            <Component {...props} />
          )
      }
    />
  );
};
export default Private;