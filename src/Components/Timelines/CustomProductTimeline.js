import React from "react";
import { Timeline } from "antd";
import { TimeLabel } from "../Labels";
import { defineColor, defineDot } from "../../Utils/timelineFunctions";
const divStyle = { paddingTop: "15px" };
const CustomProductTimeline = (props) => {
  const { customProduct } = props;

  return (
    <div style={{ width: "300px", margin: "auto" }}>
      <div style={{ width: "250px", paddingTop: "20px", margin: "auto" }}>
        <Timeline mode="left">
          <Timeline.Item
            label="Zamówiony"
            color={defineColor(customProduct.orderDate)}
          >
            <TimeLabel date={customProduct.orderDate} />
          </Timeline.Item>
          <div style={divStyle}>
            <Timeline.Item
              label="Rozwiązanie w przygotowaniu"
              color={defineColor(customProduct.preparationStartDate)}
              dot={defineDot(
                customProduct.preparationStartDate,
                customProduct.preparationCompletionDate
              )}
            >
              <TimeLabel date={customProduct.preparationStartDate} />
            </Timeline.Item>
          </div>
          <div style={divStyle}>
            <Timeline.Item
              label="Przygotowano rozwiązanie"
              color={defineColor(customProduct.preparationCompletionDate)}
            >
              <TimeLabel date={customProduct.preparationCompletionDate} />
            </Timeline.Item>
          </div>
        </Timeline>
      </div>
    </div>
  );
};

export default CustomProductTimeline;
