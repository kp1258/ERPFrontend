import React, { useState } from "react";
import { CreateUserForm } from "../../Components/Forms";
import useFetch from "../../Utils/useFetch";
const CreateUserPage = () => {
  const [data, setData] = useState();
  const createUser = (userData) => {
    setData(userData);
  };
  return (
    <div>
      <CreateUserForm handleSubmit={createUser} />
    </div>
  );
};

export default CreateUserPage;
