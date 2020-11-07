import { Button } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";
const SignInButton = () => {
  const history = useHistory();
  const routeChange = () => {
    let path = `/sign-in`;
    history.push(path);
  };
  return (
    <Button
      onClick={routeChange}
      style={{
        backgroundColor: "#1A2A69",
        borderRadius: "10px",
        color: "white",
      }}
    >
      Zaloguj się
    </Button>
  );
};

export default SignInButton;
