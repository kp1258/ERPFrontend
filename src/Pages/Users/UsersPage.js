import React from "react";
import { Space } from "antd";
import { UserInfoCard } from "../../Components/Cards";
import { PageLoader } from "../../Components/Others";
import useFetch from "../../Utils/useFetch";

const UsersPage = () => {
  const { response, error, isLoading } = useFetch({
    method: "get",
    url: "/users",
  });
  return (
    <div>
      {isLoading === false ? (
        <Space>
          {response.map((user) => (
            <UserInfoCard key={user.userId} {...user} />
          ))}
        </Space>
      ) : (
        <PageLoader />
      )}
    </div>
  );
};

export default UsersPage;
