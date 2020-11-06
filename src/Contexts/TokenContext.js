import React, { createContext, useEffect, useState } from "react";

const TokenContext = createContext(undefined);
const TokenDispatchContext = createContext(undefined);

const TokenContextProvider = ({ children }) => {
  const localState = localStorage.getItem("token");
  const initialState = "";
  const [token, setToken] = useState(localState || initialState);
  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);
  return (
    <TokenContext.Provider value={token}>
      <TokenDispatchContext.Provider value={setToken}>
        {children}
      </TokenDispatchContext.Provider>
    </TokenContext.Provider>
  );
};

export { TokenContextProvider, TokenContext, TokenDispatchContext };
