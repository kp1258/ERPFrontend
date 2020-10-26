import React from "react";
import { Button, Card, Space } from "antd";
import StandardProductCard from "./StandardProductCard";
const StandardProductAdminCard = (props) => {
  const { product } = props;
  const footer = (
    <Space>
      <Button type="primary">Edytuj dane</Button>
      <Button type="primary">Zmień status</Button>
    </Space>
  );
  return <StandardProductCard product={product} footer={footer} />;
};

export default StandardProductAdminCard;
