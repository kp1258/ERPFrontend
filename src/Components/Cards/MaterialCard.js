import React from "react";
import { Button, Card } from "antd";
const defaultImageSrc = "/assets/materialIcon.png";
const MaterialCard = (props) => {
  const { material, handleClick } = props;
  return (
    <Card
      title={material.name}
      cover={<img alt="product" src={defaultImageSrc} />}
    >
      <Button type="primary" onClick={() => handleClick(material.materialId)}>
        Edytuj dane
      </Button>
    </Card>
  );
};

export default MaterialCard;
