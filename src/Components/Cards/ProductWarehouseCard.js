import React from "react";
import { Card, List } from "antd";

const ProductWarehouseCard = (props) => {
  const { product } = props;
  const data = [
    `Wymiary: ${product.dimensions}`,
    `Kategoria: ${product.category.name}`,
    `Ilość: ${product.quantity}`,
  ];
  return (
    <div class="d-flex justify-content-center">
      <Card title={product.name} style={{ fontSize: "150%" }}>
        <List
          dataSource={data}
          renderItem={(item) => (
            <>
              <List.Item>{item}</List.Item>
            </>
          )}
        />
      </Card>
    </div>
  );
};

export default ProductWarehouseCard;
