import React from "react";
import { Route, Redirect } from "react-router-dom";

const SecuredRoute = ({
  component: Component,
  user,
  permitedRoles,
  ...rest
}) => {
  const checkPermission = () => {
    return permitedRoles.some((role) => role === user.role);
  };
  return (
    <Route
      {...rest}
      render={(props) => {
        if (checkPermission()) {
          return <Component {...rest} {...props} />;
        } else if (user.role === "anonymous") {
          return (
            <Redirect
              to={{
                pathname: "/sign-in",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        } else {
          return (
            <Redirect
              to={{
                pathname: "/unauthorized",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};

export default SecuredRoute;
