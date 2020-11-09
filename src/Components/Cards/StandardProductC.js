import React from "react";
import { Card, List, Image } from "antd";
import { inactiveCardColor } from "../../Utils/sharedStyles";

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
  return (
    <div>
      <Card
        hoverable={hoverable}
        title={product.name}
        style={{ fontSize: "150%", backgroundColor: color }}
        cover={
          <img
            style={{ width: "256px", maxHeight: "256px" }}
            alt="Produkt"
            src={
              product.imagePath !== null ? product.imagePath : defaultImageSrc
            }
          />
        }
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
