import React from "react";
import { Card, List } from "antd";

const ProductWarehouseCard = (props) => {
  const { item } = props;
  const { standardProduct } = item;
  const data = [
    `Wymiary: ${standardProduct.dimensions}`,
    `Kategoria: ${standardProduct.standardProductCategory.name}`,
    `Ilość: ${item.quantity}`,
  ];
  return (
    <div>
      <Card title={standardProduct.name} style={{ fontSize: "150%" }}>
        <List
          dataSource={data}
          renderItem={(item) => (
            <>
              <List.Item>{item}</List.Item>
            </>
          )}
        />
        {props.footer ? props.footer : ""}
      </Card>
    </div>
  );
};

export default ProductWarehouseCard;
