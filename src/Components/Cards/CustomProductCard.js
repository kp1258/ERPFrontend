import React from "react";
import { Card, List, Divider, Timeline, Space } from "antd";
import { CustomProductTimeline } from "../../Components/Timelines";
import { customProducts } from "../../Utils/Data";
const CustomProductCard = (props) => {
  const { customProduct } = props;
  const { technologist } = customProduct;
  const style = { whiteSpace: "nowrap" };
  return (
    <div>
      <Card title={customProduct.name}>
        <Divider>Opis</Divider>
        <span>{customProduct.description}</span>
        <Divider>Technolog</Divider>
        {technologist !== null ? (
          <>
            <span>
              {technologist.firstName} {technologist.lastName}
            </span>
          </>
        ) : (
          "Brak"
        )}
        <Divider>Status</Divider>
        <span>{customProduct.status}</span>
        <CustomProductTimeline customProduct={customProduct} />
      </Card>
    </div>
  );
};

export default CustomProductCard;
