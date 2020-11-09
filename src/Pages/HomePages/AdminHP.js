import React, { useContext } from "react";
import { WelcomeMessage } from "../../Components/Alerts";
import { UserContext } from "../../Contexts/UserContext";

const AdminHomePage = () => {
  const user = useContext(UserContext);
  return <WelcomeMessage user={user} />;
};

export default AdminHomePage;
