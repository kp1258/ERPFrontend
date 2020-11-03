import React from "react";
import { Radio, Space } from "antd";
const OrderTypePicker = ({ type, setType }) => {
  return (
    <div>
      <Space direction="vertical">
        <span>Wybierz typ zamówienia</span>
        <br />
        <Radio.Group
          value={type}
          onChange={(e) => {
            setType(e.target.value);
          }}
        >
          <Radio value="standardowy">Standardowe</Radio>
          <Radio value="niestandardowy">Niestandardowe</Radio>
        </Radio.Group>
        <br />
      </Space>
    </div>
  );
};

export default OrderTypePicker;
