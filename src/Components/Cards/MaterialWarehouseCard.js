import React from "react";
import { Button, Card, List } from "antd";
import "./index.css";

const MaterialWarehouseCard = (props) => {
  const { material } = props;
  const data = [`Ilość: ${material.quantity}`];
  return (
    <Card title={material.name}>
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
