import React from "react";
import { Radio, Space } from "antd";
const OrderTypePicker = ({ type, setType }) => {
  return (
    <div>
      <Space direction="vertical">
        <div
          style={{
            fontSize: "125%",
            paddingTop: "20px",
          }}
        >
          Wybierz typ zamówienia
        </div>
        <br />
        <Radio.Group
          value={type}
          onChange={(e) => {
            setType(e.target.value);
          }}
        >
          <Radio
            style={{
              fontSize: "15px",
              paddingBlock: "10px",
              paddingInline: "10px",
            }}
            value="Standardowy"
          >
            Standardowe
          </Radio>
          <Radio
            style={{
              fontSize: "15px",
              paddingBlock: "10px",
              paddingInline: "10px",
            }}
            value="Niestandardowy"
          >
            Niestandardowe
          </Radio>
        </Radio.Group>
        <br />
      </Space>
    </div>
  );
};

export default OrderTypePicker;
