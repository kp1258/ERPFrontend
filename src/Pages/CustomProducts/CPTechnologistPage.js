import React from "react";
import { CustomProductHistoryCard } from "../../Components/Cards";
import { Space } from "antd";
import { PageLoader } from "../../Components/Others";
import useFetch from "../../Api/useFetch";
import { NoDataAlert } from "../../Components/Alerts";

const CustomProductsTechnologistPage = () => {
  //moje rozwiązania
  const { response, error, isLoading } = useFetch({
    method: "get",
    url: "/technologists/4/custom-products/prepared",
  });
  console.log(response);
  return (
    <div>
      {isLoading === false ? (
        response !== "" ? (
          <Space>
            {[...response].map((customProduct) => (
              <CustomProductHistoryCard customProduct={customProduct} />
            ))}
          </Space>
        ) : (
          <NoDataAlert content="Brak rozwiązań dodanych przez technologa" />
        )
      ) : (
        <PageLoader />
      )}
    </div>
  );
};

export default CustomProductsTechnologistPage;
