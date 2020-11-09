import React, { useContext } from "react";
import { StandardProductMissingCard } from "../../Components/Cards";
import { Row, Col } from "antd";
import { PageLoader } from "../../Components/Loaders";
import useFetch from "../../Api/useFetch";
import { NoDataAlert, NetworkErrorAlert } from "../../Components/Alerts";
import { UserContext } from "../../Contexts/UserContext";
import { pageRowGutter } from "../../Utils/layoutConstants";

const MissingStandardProductsPage = () => {
  const user = useContext(UserContext);
  const { response, isLoading, error } = useFetch({
    method: "get",
    url: `/production-managers/${user.userId}/standard-products`,
  });
  return (
    <div>
      {isLoading === false ? (
        error === "" ? (
          response !== "" ? (
            <Row gutter={[...pageRowGutter]}>
              {[...response].map((product) => (
                <Col>
                  <StandardProductMissingCard product={product} />
                </Col>
              ))}
            </Row>
          ) : (
            <NoDataAlert content="W magazynie nie brakuje produktów" />
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

export default MissingStandardProductsPage;
