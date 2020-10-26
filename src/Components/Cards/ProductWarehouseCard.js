import React from "react";
import { Card, List } from "antd";

const ProductWarehouseCard = (props) => {
  const { product } = props;
  const { standardProduct } = product;
  const data = [
    `Wymiary: ${standardProduct.dimensions}`,
    `Kategoria: ${standardProduct.standardProductCategory.name}`,
    `Ilość: ${product.quantity}`,
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
