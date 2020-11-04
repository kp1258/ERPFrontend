import React from "react";
import { Timeline } from "antd";
import { TimeLabel } from "../Labels";
import { defineDot, defineColor } from "../../Utils/timelineFunctions";
const divStyle = { paddingTop: "15px" };
const CustomOrderItemTimeline = (props) => {
  const { item } = props;

  return (
    <div style={{ width: "300px", margin: "auto" }}>
      <div
        style={{
          margin: "auto",
          width: "250px",
          paddingTop: "20px",
        }}
      >
        <Timeline mode="left">
          <Timeline.Item label="Zamówione" color={defineColor(item.orderDate)}>
            <TimeLabel date={item.orderDate} />
          </Timeline.Item>
          <div style={divStyle}>
            <Timeline.Item
              label="Rozwiązanie w przygotowaniu"
              color={defineColor(item.customProduct.preparationStartDate)}
              dot={defineDot(
                item.customProduct.preparationStartDate,
                item.customProduct.preparationCompletionDate
              )}
            >
              <TimeLabel date={item.customProduct.preparationStartDate} />
            </Timeline.Item>
          </div>
          <div style={divStyle}>
            <Timeline.Item
              label="Przygotowano rozwiązanie"
              color={defineColor(item.customProduct.preparationCompletionDate)}
            >
              <TimeLabel date={item.customProduct.preparationCompletionDate} />
            </Timeline.Item>
          </div>
          <div style={divStyle}>
            <Timeline.Item
              label="W produkcji"
              color={defineColor(item.productionStartDate)}
              dot={defineDot(item.productionStartDate, item.completionDate)}
            >
              <TimeLabel date={item.productionStartDate} />
            </Timeline.Item>
          </div>
          <div style={divStyle}>
            <Timeline.Item
              label="Wyprodukowano"
              color={defineColor(item.completionDate)}
            >
              <TimeLabel date={item.completionDate} />
            </Timeline.Item>
          </div>
        </Timeline>
      </div>
    </div>
  );
};

export default CustomOrderItemTimeline;
