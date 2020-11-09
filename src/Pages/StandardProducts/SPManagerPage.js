import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import { StandardProductAdminCard } from "../../Components/Cards";
import { PageLoader } from "../../Components/Loaders";
import useFetch from "../../Api/useFetch";
import { NoDataAlert, NetworkErrorAlert } from "../../Components/Alerts";
import { EditStandardProductModal } from "../../Components/Modals";
import { pageRowGutter } from "../../Utils/layoutConstants";

const StandardProductsManagerPage = () => {
  const [triggerUpdate, setTriggerUpdate] = useState(false);
  const [product, setProduct] = useState({});
  const [visible, setVisible] = useState(false);

  const { response, isLoading, refetch, error } = useFetch({
    method: "get",
    url: "/standard-products",
  });
  console.log(response);
  useEffect(() => {
    console.log("use effect triggered");
    refreshProduct();
  }, [triggerUpdate, response]);

  const toggleTrigger = () => {
    refetch({});
    setTriggerUpdate(!triggerUpdate);
  };
  const refreshProduct = () => {
    product.name
      ? handleChooseProduct(product.standardProductId)
      : console.log("nothing");
  };
  const handleChooseProduct = (id) => {
    let products = [...response];
    let chosenProduct = products.find((product) => {
      return product.standardProductId === id;
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
                {[...response].map((product) => {
                  return (
                    <Col>
                      <StandardProductAdminCard
                        key={product.standardProductId}
                        product={product}
                        showModal={() => setVisible(true)}
                        toggleUpdate={toggleTrigger}
                        handleClick={handleChooseProduct}
                      />
                    </Col>
                  );
                })}
              </Row>
              {product.name ? (
                <EditStandardProductModal
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
            <NoDataAlert content="Brak produktów standardowych" />
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

export default StandardProductsManagerPage;
