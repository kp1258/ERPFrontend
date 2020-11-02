import React, { useState } from "react";
import { Steps, Button } from "antd";
const { Step } = Steps;
const steps = [
  {
    title: "clientPicker",
    content: "ClientPicker",
  },
  {
    title: "orderTypePicker",
    content: "OrderTypePicker",
  },
  {
    title: "orderItemsPicker",
    content: "OrderItemsPicker",
  },
];
const OrderSteps = () => {
  const [current, setCurrent] = useState(0);
  const next = () => {
    const nextStep = current + 1;
    setCurrent(nextStep);
  };
  const previous = () => {
    const nextStep = current - 1;
    setCurrent(nextStep);
  };
  return (
    <>
      <Steps current={current}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content">{steps[current].content}</div>
      <div className="steps-action">
        {current > 0 && (
          <Button style={{ margin: "0 8px" }} onClick={() => previous()}>
            Wróć
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary">Zatwierdź</Button>
        )}
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Dalej
          </Button>
        )}
      </div>
    </>
  );
};

export default OrderSteps;
