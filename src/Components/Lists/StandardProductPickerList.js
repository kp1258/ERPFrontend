import React, { useState } from "react";
import { List, Card, InputNumber, Checkbox } from "antd";
import { ImageCard } from "../Others";
const defaultImageSrc = "/assets/productIcon.png";
const StandardProductPickerList = ({
  products,
  standardOrderItems,
  setStandardOrderItems,
}) => {
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  const toggleCheckbox = (e, item) => {
    const checkedBoxes = [...selectedCheckboxes];
    if (e.target.checked) {
      checkedBoxes.push(item);
    } else {
      const index = checkedBoxes.findIndex(
        (ch) => ch.standardProductId === item.standardProductId
      );
      checkedBoxes.splice(index, 1);
    }
    setSelectedCheckboxes([...checkedBoxes]);
  };
  const onInputChange = (e, item) => {
    console.log(e);
    let orderItems = [...standardOrderItems];
    let orderItem = orderItems.find((x) => {
      return x.standardProductId === item.standardProductId;
    });
    console.log(orderItem);
    let newOrderItem = {
      standardProductId: item.standardProductId,
      quantity: e,
    };
    if (orderItem === undefined) {
      orderItems.push(newOrderItem);
      setStandardOrderItems([...orderItems]);
    } else {
      var index = orderItems.findIndex(
        (x) => x.standardProductId === item.standardProductId
      );
      orderItems.splice(index, 1, newOrderItem);
      setStandardOrderItems([...orderItems]);
    }
    console.log(standardOrderItems);
  };
  return (
    <div>
      <List
        grid={{ gutter: 16, xs: 1, sm: 1, md: 1, lg: 2, xl: 3, xxl: 5 }}
        dataSource={products}
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 5,
        }}
        footer={<div>Liczba produktów: {products.length}</div>}
        renderItem={(item) => {
          const inputStatus = !selectedCheckboxes.find(
            (ch) => ch.standardProductId === item.standardProductId
          );
          const imageSrc =
            item.imagePath !== null ? item.imagePath : defaultImageSrc;
          return (
            <List.Item>
              <Card
                style={{ width: "300px" }}
                extra={[
                  <Checkbox
                    checked={selectedCheckboxes.find(
                      (ch) => ch.standardProductId === item.standardProductId
                    )}
                    onChange={(e) => toggleCheckbox(e, item)}
                  />,
                ]}
                actions={[
                  <InputNumber
                    disabled={inputStatus}
                    onChange={(e) => onInputChange(e, item)}
                  />,
                ]}
                title={item.name}
                hoverable
                cover={<ImageCard imageSrc={imageSrc} />}
              >
                <div>{`Wymiary: ${item.dimensions}`}</div>
                <div>{`Kategoria: ${item.standardProductCategory.name}`}</div>
              </Card>
            </List.Item>
          );
        }}
      ></List>
    </div>
  );
};

export default StandardProductPickerList;
