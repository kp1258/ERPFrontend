import React from "react";
import { Card, List } from "antd";
const defaultImageSrc = "/assets/productIcon.png";
const ProductWarehouseCard = (props) => {
  const { item } = props;
  const { standardProduct } = item;
  const data = [
    `Wymiary: ${standardProduct.dimensions}`,
    `Kategoria: ${standardProduct.standardProductCategory.name}`,
    `Ilość: ${item.quantity}`,
  ];
  return (
    <div>
      <Card
        hoverable
        title={standardProduct.name}
        style={{ fontSize: "150%" }}
        cover={
          <img
            style={{ width: "256px", maxHeight: "256px" }}
            alt="Produkt"
            src={
              standardProduct.imagePath !== null
                ? standardProduct.imagePath
                : defaultImageSrc
            }
          />
        }
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
