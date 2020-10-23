import React from "react";
import { Button, Card } from "antd";
const StandardProductAdminCard = (props) => {
  const { product } = props;
  const data = {};
  return (
    <div class="d-flex justify-content-center">
      <Card title={product.name}>
        <Button type="primary">Edytuj</Button>
      </Card>
    </div>
  );
};

export default StandardProductAdminCard;
