import React from "react";
import { Space } from "antd";
import { UserAdminCard } from "../../Components/Cards";
import { PageLoader } from "../../Components/Others";
import useFetch from "../../Utils/useFetch";

const UsersAdminPage = () => {
  const { response, error, isLoading } = useFetch({
    method: "get",
    url: "/users",
  });
  console.log(response);
  return (
    <div>
      {isLoading === false ? (
        <Space>
          {response.map((user) => (
            <UserAdminCard key={user.userId} user={user} />
          ))}
        </Space>
      ) : (
        <PageLoader />
      )}
    </div>
  );
};

export default UsersAdminPage;
