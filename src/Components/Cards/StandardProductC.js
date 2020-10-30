import React from "react";
import { Card, List } from "antd";

const defaultImageSrc = "/assets/productIcon.png";
const StandardProductCard = (props) => {
  const { product } = props;
  const data = [
    `Wymiary: ${product.dimensions}`,
    `Kategoria: ${product.standardProductCategory.name}`,
    `Status: ${product.status}`,
  ];
  return (
    <div>
      <Card
        hoverable
        title={product.name}
        style={{ fontSize: "150%" }}
        cover={<img alt="example" src={defaultImageSrc} />}
      >
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
