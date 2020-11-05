import React, { createContext, useEffect, useState } from "react";

const UserContext = createContext(undefined);
const UserDispatchContext = createContext(undefined);

const UserContextProvider = ({ children }) => {
  const localState = JSON.parse(localStorage.getItem("user"));
  const initialState = {
    firstName: "Gość",
    role: "anonymous",
  };
  const [userDetails, setUserDetails] = useState(localState || initialState);
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(userDetails));
  }, [userDetails]);
  return (
    <UserContext.Provider value={userDetails}>
      <UserDispatchContext.Provider value={setUserDetails}>
        {children}
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  );
};

export { UserContextProvider, UserContext, UserDispatchContext };
