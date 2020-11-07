import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { SignInForm } from "../../Components/Forms";
import { UserDispatchContext } from "../../Contexts/UserContext";
import { users } from "../../Api/erpApi";
import { determinePath } from "../../Utils/authenticationFunctions";
import { TokenDispatchContext } from "../../Contexts/TokenContext";
import { handleResponse } from "../../Api/handleResponse";

const SignInPage = () => {
  const [loading, setLoading] = useState(false);
  const setUser = useContext(UserDispatchContext);
  const setToken = useContext(TokenDispatchContext);
  const history = useHistory();

  const handleLogin = (data) => {
    console.log(data);
    setLoading(true);
    users
      .signIn(data)
      .then((res) => {
        console.log("response");
        console.log(res);
        localStorage.setItem("token", res.data.token);
        setToken(res.data.token);
        users
          .getData(res.data.userId)
          .then((res) => {
            console.log(res);
            setUser(res.data);
            history.push(`${determinePath(res.data)}`);
          })
          .catch((err) => {
            console.log(err);
            handleResponse(
              err,
              "Coś poszło nie tak przy pobieraniu danych użytkownika"
            );
          });
      })
      .catch((err) => {
        handleResponse(err, "Niepoprawny login lub hasło");
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div>
      <SignInForm handleLogin={handleLogin} confirmLoading={loading} />
    </div>
  );
};

export default SignInPage;
