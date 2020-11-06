import React, { useEffect, useState } from "react";
import { Space } from "antd";
import { UserAdminCard } from "../../Components/Cards";
import { PageLoader } from "../../Components/Loaders";
import useFetch from "../../Api/useFetch";
import { NoDataAlert, NetworkErrorAlert } from "../../Components/Alerts";

const UsersAdminPage = () => {
  const [triggerUpdate, setTriggerUpdate] = useState(false);
  const [user, setUser] = useState();
  const { response, isLoading, refetch, error } = useFetch({
    method: "get",
    url: "/users",
  });
  useEffect(() => {
    console.log("use effect triggered");
  }, [triggerUpdate]);

  const toggleTrigger = () => {
    refetch({});
    setTriggerUpdate(!triggerUpdate);
  };
  console.log("error");
  console.log(error);
  const handleChooseUser = (id) => {
    let users = [...response];
    let chosenUser = users.find((user) => {
      return user.userId === id;
    });
    setUser(chosenUser);
    console.log({ chosenUser });
    console.log({ user });
  };

  return (
    <div>
      {isLoading === false ? (
        error === "" ? (
          response !== "" ? (
            <>
              <Space>
                {[...response].map((user) => (
                  <UserAdminCard
                    key={user.userId}
                    user={user}
                    handleChooseUser={handleChooseUser}
                    toggleUpdate={toggleTrigger}
                  />
                ))}
              </Space>
            </>
          ) : (
            <NoDataAlert content="Brak pracowników w bazie" />
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

export default UsersAdminPage;
