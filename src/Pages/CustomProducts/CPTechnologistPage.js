import React, { useContext } from "react";
import { CustomProductHistoryCard } from "../../Components/Cards";
import { Space } from "antd";
import { PageLoader } from "../../Components/Loaders";
import useFetch from "../../Api/useFetch";
import { NoDataAlert } from "../../Components/Alerts";
import { UserContext } from "../../Contexts/UserContext";

//moje rozwiązania
const CustomProductsTechnologistPage = () => {
  const user = useContext(UserContext);
  const { response, isLoading } = useFetch({
    method: "get",
    url: `/technologists/${user.userId}/custom-products/prepared`,
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
