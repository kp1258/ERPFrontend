import React from "react";
import { Row, Col } from "antd";
import { UserInfoCard } from "../../Components/Cards";
import { PageLoader } from "../../Components/Loaders";
import useFetch from "../../Api/useFetch";
import { NoDataAlert, NetworkErrorAlert } from "../../Components/Alerts";
import { pageRowGutter } from "../../Utils/layoutConstants";

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
            <Row gutter={[...pageRowGutter]}>
              {[...response].map((user) => (
                <Col>
                  <UserInfoCard key={user.userId} {...user} />
                </Col>
              ))}
            </Row>
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
