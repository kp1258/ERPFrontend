import React from "react";
import { Timeline } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";

const CustomOrderItemTimeline = (props) => {
  const { item } = props;
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
        <Timeline.Item label="Zamówione" color={defineColor(item.orderDate)}>
          <div>{item.orderDate.substring(0, 10)}</div>
        </Timeline.Item>
        <Timeline.Item
          label="Rozwiązanie w przygotowaniu"
          color={defineColor(item.customProduct.preparationStartDate)}
          dot={defineDot(
            item.customProduct.preparationStartDate,
            item.customProduct.preparationCompletionDate
          )}
        >
          {item.customProduct.preparationStartDate.substring(0, 10) !==
          "0001-01-01" ? (
            <div>
              {item.customProduct.preparationStartDate.substring(0, 10)}
            </div>
          ) : (
            <div style={{ height: "15px" }}> </div>
          )}
        </Timeline.Item>
        <Timeline.Item
          label="Przygotowano rozwiązanie"
          color={defineColor(item.customProduct.preparationCompletionDate)}
        >
          {item.customProduct.preparationCompletionDate.substring(0, 10) !==
          "0001-01-01" ? (
            <div>
              {item.customProduct.preparationCompletionDate.substring(0, 10)}
            </div>
          ) : (
            <div style={{ height: "15px" }}> </div>
          )}
        </Timeline.Item>
        <Timeline.Item
          label="W produkcji"
          color={defineColor(item.productionStartDate)}
          dot={defineDot(item.productionStartDate, item.completionDate)}
        >
          {item.productionStartDate.substring(0, 10) !== "0001-01-01" ? (
            <div>{item.productionStartDate.substring(0, 10)}</div>
          ) : (
            <div style={{ height: "15px" }}> </div>
          )}
        </Timeline.Item>
        <Timeline.Item
          label="Zrealizowano"
          color={defineColor(item.completionDate)}
        >
          {item.completionDate.substring(0, 10) !== "0001-01-01" ? (
            <div>{item.completionDate.substring(0, 10)}</div>
          ) : (
            <div style={{ height: "15px" }}> </div>
          )}
        </Timeline.Item>
      </Timeline>
    </div>
  );
};

export default CustomOrderItemTimeline;
