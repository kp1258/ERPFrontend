import React from "react";
import { Space } from "antd";
import { UserInfoCard } from "../../Components/Cards";
import { PageLoader } from "../../Components/Loaders";
import useFetch from "../../Api/useFetch";
import { NoDataAlert, NetworkErrorAlert } from "../../Components/Alerts";

const UsersPage = () => {
  const { response, isLoading, error } = useFetch({
    method: "get",
    url: "/users",
  });
  return (
    <div>
      {isLoading === false ? (
        error === "" ? (
          response !== "" ? (
            <Space>
              {[...response].map((user) => (
                <UserInfoCard key={user.userId} {...user} />
              ))}
            </Space>
          ) : (
            <NoDataAlert content="Brak pracowników" />
          )
        ) : (
          <NetworkErrorAlert />
        )
      ) : (
        <PageLoader />
      )}
    </div>
  );
};

export default UsersPage;
