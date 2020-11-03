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
