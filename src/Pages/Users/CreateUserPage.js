import React, { useState } from "react";
import { CreateUserForm } from "../../Components/Forms";
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
