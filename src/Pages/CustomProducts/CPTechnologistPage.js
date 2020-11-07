import React, { useContext } from "react";
import { CustomProductHistoryCard } from "../../Components/Cards";
import { Row, Col } from "antd";
import { PageLoader } from "../../Components/Loaders";
import useFetch from "../../Api/useFetch";
import { NoDataAlert, NetworkErrorAlert } from "../../Components/Alerts";
import { UserContext } from "../../Contexts/UserContext";
import { pageRowGutter } from "../../Utils/layoutConstants";

//moje rozwiązania
const CustomProductsTechnologistPage = () => {
  const user = useContext(UserContext);
  const { response, isLoading, error } = useFetch({
    method: "get",
    url: `/technologists/${user.userId}/custom-products/prepared`,
  });
  console.log(response);
  return (
    <div>
      {isLoading === false ? (
        error === "" ? (
          response !== "" ? (
            <Row gutter={[...pageRowGutter]}>
              {[...response].map((customProduct) => (
                <Col>
                  <CustomProductHistoryCard customProduct={customProduct} />
                </Col>
              ))}
            </Row>
          ) : (
            <NoDataAlert content="Brak rozwiązań dodanych przez technologa" />
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

export default CustomProductsTechnologistPage;
