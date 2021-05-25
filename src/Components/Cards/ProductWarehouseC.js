import React from "react";
import { Card, List } from "antd";
import { inactiveCardColor } from "../../Utils/sharedStyles";
import { ImageCard } from "../Others";
const defaultImageSrc = "/assets/productIcon.png";
const ProductWarehouseCard = (props) => {
  const { item } = props;
  const { standardProduct } = item;
  const color =
    standardProduct.status === "Produkowany" ? "" : inactiveCardColor;
  const hoverable = standardProduct.status === "Produkowany" ? true : false;
  const data = [
    `Wymiary: ${standardProduct.dimensions}`,
    `Kategoria: ${standardProduct.standardProductCategory.name}`,
    `Status: ${standardProduct.status}`,
    `Liczba: ${item.quantity}`,
  ];
  const imageSrc =
    standardProduct.imagePath !== null
      ? standardProduct.imagePath
      : defaultImageSrc;
  return (
    <div>
      <Card
        hoverable={hoverable}
        title={standardProduct.name}
        style={{ fontSize: "150%", backgroundColor: color, width: "320px" }}
        cover={<ImageCard imageSrc={imageSrc} />}
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
    </div>
  );
};

export default ProductWarehouseCard;
