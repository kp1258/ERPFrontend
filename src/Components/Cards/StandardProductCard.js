import React from "react";
import { Card, List } from "antd";
const StandardProductCard = (props) => {
  const { product } = props;
  const data = [
    `Wymiary: ${product.dimensions}`,
    `Kategoria: ${product.standardProductCategory.name}`,
  ];
  return (
    <div>
      <Card title={product.name} style={{ fontSize: "150%" }}>
        <List
          dataSource={data}
          renderItem={(item) => <List.Item>{item}</List.Item>}
        />
        {props.footer ? props.footer : ""}
      </Card>
    </div>
  );
};

export default StandardProductCard;
