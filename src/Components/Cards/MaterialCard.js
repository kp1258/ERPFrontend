import React from "react";
import { Button, Card, List } from "antd";
const defaultImageSrc = "/assets/materialIcon.png";
const MaterialCard = (props) => {
  const { material, handleClick } = props;
  const data = [`Jednostka: ${material.unit}`];
  return (
    <Card
      hoverable
      title={material.name}
      cover={<img alt="material" src={defaultImageSrc} />}
    >
      <List
        dataSource={data}
        renderItem={(item) => <List.Item>{item}</List.Item>}
      />
      <Button type="primary" onClick={() => handleClick(material.materialId)}>
        Edytuj dane
      </Button>
    </Card>
  );
};

export default MaterialCard;
