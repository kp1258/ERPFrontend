import React from "react";
import { Timeline } from "antd";
import { TimeLabel } from "../Labels";
import { defineDot, defineColor } from "../../Utils/timelineFunctions";

const OrderTimeline = (props) => {
  const { order } = props;

  return (
    <div style={{ width: "300px", margin: "auto" }}>
      <div style={{ width: "200px", margin: "auto", paddingTop: "20px" }}>
        <Timeline mode="left">
          <Timeline.Item label="Złożone" color={defineColor(order.placingDate)}>
            <TimeLabel date={order.placingDate} />
          </Timeline.Item>
          <Timeline.Item
            label="W realizacji"
            color={defineColor(order.realizationStartDate)}
            dot={defineDot(order.realizationStartDate, order.completionDate)}
          >
            <TimeLabel date={order.realizationStartDate} />
          </Timeline.Item>
          <Timeline.Item
            label="Zrealizowane"
            color={defineColor(order.completionDate)}
          >
            <TimeLabel date={order.completionDate} />
          </Timeline.Item>
        </Timeline>
      </div>
    </div>
  );
};

export default OrderTimeline;
