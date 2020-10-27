import React from "react";
import { CustomProductHistoryCard } from "../../Components/Cards";
import { customProducts } from "../../Utils/Data";
import { Space } from "antd";
const CustomProductsTechnologistPage = () => {
  return (
    <div>
      <Space>
        {customProducts.map((customProduct) => (
          <CustomProductHistoryCard customProduct={customProduct} />
        ))}
      </Space>
    </div>
  );
};

export default CustomProductsTechnologistPage;
