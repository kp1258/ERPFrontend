import React from "react";
import { Card, List } from "antd";
import "./index.css";

const MaterialWarehouseCard = (props) => {
  const { material } = props;
  const data = [`Ilość: ${material.quantity}`];
  return (
    <div class="d-flex justify-content-center">
      <Card title={material.name}>
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

export default MaterialWarehouseCard;
