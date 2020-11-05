import React, { useContext } from "react";
import { StandardProductMissingCard } from "../../Components/Cards";
import { Space } from "antd";
import { PageLoader } from "../../Components/Loaders";
import useFetch from "../../Api/useFetch";
import { NoDataAlert } from "../../Components/Alerts";
import { UserContext } from "../../Contexts/UserContext";

const MissingStandardProductsPage = () => {
  const user = useContext(UserContext);
  const { response, isLoading } = useFetch({
    method: "get",
    url: `/production-managers/${user.userId}/standard-products`,
  });
  return (
    <div>
      {isLoading === false ? (
        response !== "" ? (
          <Space>
            {[...response].map((product) => (
              <StandardProductMissingCard product={product} />
            ))}
          </Space>
        ) : (
          <NoDataAlert content="W magazynie nie brakuje produktów standardowych" />
        )
      ) : (
        <PageLoader />
      )}
    </div>
  );
};

export default MissingStandardProductsPage;
