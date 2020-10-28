import React from "react";
import { Space } from "antd";
import useFetch from "../../Api/useFetch";
import { PageLoader } from "../../Components/Others";
import { CustomProductInPreparationCard } from "../../Components/Cards";
import { NoDataAlert } from "../../Components/Alerts";
const CustomProductsInPreparationPage = () => {
  const { response, error, isLoading } = useFetch({
    method: "get",
    url: "/technologists/4/custom-products/in-preparation",
  });
  console.log(response);
  return (
    <div>
      {isLoading === false ? (
        response !== "" ? (
          <Space>
            {[...response].map((customProduct) => (
              <CustomProductInPreparationCard customProduct={customProduct} />
            ))}
          </Space>
        ) : (
          <NoDataAlert content="Brak produktów na zamówienie w realizacji" />
        )
      ) : (
        <PageLoader />
      )}
    </div>
  );
};

export default CustomProductsInPreparationPage;
