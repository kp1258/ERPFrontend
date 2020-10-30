import React from "react";
import { Button, Card, List } from "antd";
import "./index.css";
const defaultImageSrc = "/assets/materialIcon.png";
const MaterialWarehouseCard = (props) => {
  const { item } = props;
  const data = [`Ilość: ${item.quantity}`];
  return (
    <Card
      title={item.material.name}
      cover={<img alt="product" src={defaultImageSrc} />}
    >
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
  );
};

export default MaterialWarehouseCard;
