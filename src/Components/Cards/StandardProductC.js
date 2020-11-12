import React from "react";
import { Card, List, Image } from "antd";
import { inactiveCardColor } from "../../Utils/sharedStyles";
import { ImageCard } from "../Others";

const defaultImageSrc = "/assets/productIcon.png";
const StandardProductCard = (props) => {
  const { product } = props;
  const color = product.status === "Produkowany" ? "" : inactiveCardColor;
  const hoverable = product.status === "Produkowany" ? true : false;
  const data = [
    `Wymiary: ${product.dimensions}`,
    `Kategoria: ${product.standardProductCategory.name}`,
    `Status: ${product.status}`,
  ];
  console.log(product);
  const imageSrc =
    product.imagePath !== null ? product.imagePath : defaultImageSrc;
  return (
    <div>
      <Card
        hoverable={hoverable}
        title={<div>{product.name}</div>}
        style={{ fontSize: "150%", backgroundColor: color, width: "320px" }}
        cover={<ImageCard imageSrc={imageSrc} />}
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
