import React from "react";
import StandardProductsPicker from "./StandardProductsPicker";
import CustomOrderItemsCreator from "./CustomOrderItemsCreator";
const OrderItemsPicker = ({
  type,
  customOrderItems,
  setCustomOrderItems,
  standardOrderItems,
  setStandardOrderItems,
}) => {
  return (
    <div>
      <div
        style={{ fontSize: "125%", paddingTop: "20px", paddingBottom: "20px" }}
      >
        Wybierz zawartość zamówienia
      </div>
      {type === "standardowy" ? (
        <StandardProductsPicker
          standardOrderItems={standardOrderItems}
          setStandardOrderItems={setStandardOrderItems}
        />
      ) : (
        <CustomOrderItemsCreator
          customOrderItems={customOrderItems}
          setCustomOrderItems={setCustomOrderItems}
        />
      )}
    </div>
  );
};

export default OrderItemsPicker;
