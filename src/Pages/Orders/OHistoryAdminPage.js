import React from "react";
import { OrderHistoryCard } from "../../Components/Cards";
import { warehousemanOrders } from "../../Utils/Data";
import { Space } from "antd";
const OrdersHistoryAdminPage = () => {
  return (
    <div>
      <Space>
        {warehousemanOrders.map((order) => (
          <OrderHistoryCard order={order} />
        ))}
      </Space>
    </div>
  );
};

export default OrdersHistoryAdminPage;
