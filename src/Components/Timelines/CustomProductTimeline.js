import React from "react";
import { Timeline } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";

const CustomProductTimeline = (props) => {
  const { customProduct } = props;
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
    <div style={{ width: "400px", whiteSpace: "nowrap", paddingTop: "20px" }}>
      <Timeline mode="left">
        <Timeline.Item
          label="Zamówiony"
          color={defineColor(customProduct.orderDate)}
        >
          <div>{customProduct.orderDate.substring(0, 10)}</div>
        </Timeline.Item>
        <Timeline.Item
          label="Rozwiązanie w przygotowaniu"
          color={defineColor(customProduct.preparationStartDate)}
          dot={defineDot(
            customProduct.preparationStartDate,
            customProduct.preparationCompletionDate
          )}
        >
          {customProduct.preparationStartDate.substring(0, 10) !==
          "0001-01-01" ? (
            <div>{customProduct.preparationStartDate.substring(0, 10)}</div>
          ) : (
            <div style={{ height: "15px" }}> </div>
          )}
        </Timeline.Item>
        <Timeline.Item
          label="Przygotowano rozwiązanie"
          color={defineColor(customProduct.preparationCompletionDate)}
        >
          {customProduct.preparationCompletionDate.substring(0, 10) !==
          "0001-01-01" ? (
            <div>
              {customProduct.preparationCompletionDate.substring(0, 10)}
            </div>
          ) : (
            <div style={{ height: "15px" }}> </div>
          )}
        </Timeline.Item>
      </Timeline>
    </div>
  );
};

export default CustomProductTimeline;
