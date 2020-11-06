import React, { useEffect, useState, useContext } from "react";
import useFetch from "../../Api/useFetch";
import { PageLoader } from "../../Components/Loaders";
import { NoDataAlert, NetworkErrorAlert } from "../../Components/Alerts";
import { OrderInRealizationCard } from "../../Components/Cards";
import { Space } from "antd";
import { CompleteOrderModal } from "../../Components/Modals";
import { UserContext } from "../../Contexts/UserContext";

const OrdersInRealizationWarehousemanPage = () => {
  const user = useContext(UserContext);
  const [triggerUpdate, setTriggerUpdate] = useState(false);
  const [order, setOrder] = useState({});
  const [visible, setVisible] = useState(false);

  const { response, isLoading, refetch, error } = useFetch({
    method: "get",
    url: `/orders/active?WarehousemanId=${user.userId}`,
  });
  console.log(response);
  useEffect(() => {
    console.log("use Effect triggered");
  }, [triggerUpdate]);
  const toggleTrigger = () => {
    refetch({});
    setTriggerUpdate(!triggerUpdate);
  };

  const handleChooseOrder = (id) => {
    let orders = [...response];
    let chosenOrder = orders.find((order) => {
      return order.orderId === id;
    });
    setOrder(chosenOrder);
    console.log(chosenOrder);
  };
  return (
    <div>
      {isLoading === false ? (
        error === "" ? (
          response !== "" ? (
            <div>
              <Space>
                {[...response].map((order) => [
                  <OrderInRealizationCard
                    key={order.orderId}
                    order={order}
                    showModal={() => setVisible(true)}
                    toggleUpdate={toggleTrigger}
                    handleClick={handleChooseOrder}
                  />,
                ])}
              </Space>
              {order.orderId ? (
                <CompleteOrderModal
                  visible={visible}
                  order={order}
                  toggleUpdate={toggleTrigger}
                  hideModal={() => setVisible(false)}
                />
              ) : (
                ""
              )}
            </div>
          ) : (
            <NoDataAlert content="Brak zamówień w realizacji" />
          )
        ) : (
          <NetworkErrorAlert />
        )
      ) : (
        <PageLoader />
      )}
    </div>
  );
};

export default OrdersInRealizationWarehousemanPage;
