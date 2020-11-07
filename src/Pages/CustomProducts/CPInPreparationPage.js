import React, { useEffect, useState, useContext } from "react";
import { Row, Col } from "antd";
import useFetch from "../../Api/useFetch";
import { PageLoader } from "../../Components/Loaders";
import { CustomProductInPreparationCard } from "../../Components/Cards";
import { NoDataAlert, NetworkErrorAlert } from "../../Components/Alerts";
import { AddSolutionModal } from "../../Components/Modals";
import { UserContext } from "../../Contexts/UserContext";
import { pageRowGutter } from "../../Utils/layoutConstants";

const CustomProductsInPreparationPage = () => {
  const user = useContext(UserContext);
  const [triggerUpdate, setTriggerUpdate] = useState(false);
  const [product, setProduct] = useState({});
  const [visible, setVisible] = useState(false);

  const { response, isLoading, refetch, error } = useFetch({
    method: "get",
    url: `/technologists/${user.userId}/custom-products/in-preparation`,
  });
  useEffect(() => {
    console.log("use effect triggered");
  }, [triggerUpdate]);

  const toggleTrigger = () => {
    refetch({});
    setTriggerUpdate(!triggerUpdate);
  };

  const handleChooseProduct = (id) => {
    let products = [...response];
    let chosenProduct = products.find((product) => {
      return product.customProductId === id;
    });
    setProduct(chosenProduct);
    console.log(chosenProduct);
  };
  return (
    <div>
      {isLoading === false ? (
        error === "" ? (
          response !== "" ? (
            <>
              <Row gutter={[...pageRowGutter]}>
                {[...response].map((product) => (
                  <Col>
                    <CustomProductInPreparationCard
                      key={product.customProductId}
                      customProduct={product}
                      showModal={() => setVisible(true)}
                      handleClick={handleChooseProduct}
                    />
                  </Col>
                ))}
              </Row>
              {product.name ? (
                <AddSolutionModal
                  visible={visible}
                  product={product}
                  toggleUpdate={toggleTrigger}
                  hideModal={() => setVisible(false)}
                />
              ) : (
                ""
              )}
            </>
          ) : (
            <NoDataAlert content="Brak produktów na zamówienie w realizacji" />
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

export default CustomProductsInPreparationPage;
