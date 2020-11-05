import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { SignInForm } from "../../Components/Forms";
import { UserContext, UserDispatchContext } from "../../Contexts/UserContext";
import { users } from "../../Utils/users";
import { determinePath } from "../../Utils/authenticationFunctions";
const SignInPage = () => {
  const user = useContext(UserContext);
  const setUser = useContext(UserDispatchContext);
  const handleLogin = (data) => {
    console.log(data);
    setUser(users[2]);
  };
  return (
    <div>
      {user.role === "anonymous" ? (
        <SignInForm handleLogin={handleLogin} />
      ) : (
        <Redirect to={`/${determinePath(user)}`} />
      )}
    </div>
  );
};

export default SignInPage;
