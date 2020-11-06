import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import { SignInForm } from "../../Components/Forms";
import { UserContext, UserDispatchContext } from "../../Contexts/UserContext";
import { users } from "../../Api/erpApi";
import { determinePath } from "../../Utils/authenticationFunctions";
import { TokenDispatchContext } from "../../Contexts/TokenContext";

const SignInPage = () => {
  const [loading, setLoading] = useState(false);
  const user = useContext(UserContext);
  const setUser = useContext(UserDispatchContext);
  const setToken = useContext(TokenDispatchContext);

  const handleLogin = (data) => {
    console.log(data);
    setLoading(true);
    users
      .signIn(data)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        setToken(res.data.token);
        users
          .getData(res.data.userId)
          .then((res) => {
            console.log(res);
            setUser(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div>
      {user.role === "anonymous" ? (
        <SignInForm handleLogin={handleLogin} confirmLoading={loading} />
      ) : (
        <Redirect to={`/${determinePath(user)}`} />
      )}
    </div>
  );
};

export default SignInPage;
