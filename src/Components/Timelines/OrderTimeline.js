import React from "react";
import { Timeline } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";

const OrderTimeline = (props) => {
  const { order } = props;
  const defineColor = (date) => {
    var dateS = date.substring(0, 10);
    if (dateS === "0001-01-01") {
      return "gray";
    } else {
      return "green";
    }
  };
  const defineDot = (currentDate, nextDate) => {
    let currentDateS = currentDate.substring(0, 10);
    let nextDateS = nextDate.substring(0, 10);
    if (currentDateS !== "0001-01-01" && nextDateS === "0001-01-01") {
      return (
        <ClockCircleOutlined style={{ fontSize: "16px", color: "blue" }} />
      );
    } else {
      return;
    }
  };
  return (
    <div style={{ width: "350px", whiteSpace: "nowrap", paddingTop: "20px" }}>
      <Timeline mode="left">
        <Timeline.Item label="Złożone" color={defineColor(order.placingDate)}>
          <div>{order.placingDate.substring(0, 10)}</div>
        </Timeline.Item>
        <Timeline.Item
          label="W realizacji"
          color={defineColor(order.realizationStartDate)}
          dot={defineDot(order.realizationStartDate, order.completionDate)}
        >
          {order.realizationStartDate.substring(0, 10) !== "0001-01-01" ? (
            <div>{order.realizationStartDate.substring(0, 10)}</div>
          ) : (
            <div style={{ height: "15px" }}></div>
          )}
        </Timeline.Item>
        <Timeline.Item
          label="Zrealizowane"
          color={defineColor(order.completionDate)}
        >
          {order.completionDate.substring(0, 10) !== "0001-01-01" ? (
            <div>{order.completionDate.substring(0, 10)}</div>
          ) : (
            <div style={{ height: "15px" }}></div>
          )}
        </Timeline.Item>
      </Timeline>
    </div>
  );
};

export default OrderTimeline;
