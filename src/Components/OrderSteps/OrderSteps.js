import React, { useEffect, useState } from "react";
import { Steps, Button, Divider, message } from "antd";
import { PopconfirmButton } from "../Buttons";
import ClientPicker from "./ClientPicker";
import OrderTypePicker from "./OrderTypePicker";
import OrderItemsPicker from "./OrderItemsPicker";
import { orders } from "../../Api/erpApi";

const { Step } = Steps;
const OrderSteps = () => {
  const [current, setCurrent] = useState(0);
  const [clientId, setClientId] = useState();
  const [client, setClient] = useState({});
  const [type, setType] = useState();
  const [customOrderItems, setCustomOrderItems] = useState([]);
  const [standardOrderItems, setStandardOrderItems] = useState([]);
  useEffect(() => {
    setCustomOrderItems([]);
    setStandardOrderItems([]);
  }, [type]);
  const steps = [
    {
      title: "Odbiorca",
      content: (
        <ClientPicker
          client={client}
          setClient={setClient}
          clientId={clientId}
          setClientId={setClientId}
        />
      ),
    },
    {
      title: "Typ zamówienia",
      content: <OrderTypePicker type={type} setType={setType} />,
    },
    {
      title: "Zawartość zamówienia",
      content: (
        <OrderItemsPicker
          type={type}
          customOrderItems={customOrderItems}
          setCustomOrderItems={setCustomOrderItems}
          standardOrderItems={standardOrderItems}
          setStandardOrderItems={setStandardOrderItems}
        />
      ),
    },
  ];

  function objectToFormData(obj, rootName) {
    var formData = new FormData();

    function appendFormData(data, root) {
      root = root || "";
      if (data instanceof File) {
        formData.append(root, data);
      } else if (Array.isArray(data)) {
        for (var i = 0; i < data.length; i++) {
          if (data[i] instanceof File) {
            appendFormData(data[i], root);
          } else {
            appendFormData(data[i], root + "[" + i + "]");
          }
        }
      } else if (typeof data === "object" && data) {
        for (var key in data) {
          if (data.hasOwnProperty(key)) {
            if (root === "") {
              appendFormData(data[key], key);
            } else {
              appendFormData(data[key], root + "." + key);
            }
          }
        }
      } else {
        if (data !== null && typeof data !== "undefined") {
          formData.append(root, data);
        }
      }
    }
    appendFormData(obj, rootName);

    return formData;
  }
  const next = () => {
    const nextStep = current + 1;
    setCurrent(nextStep);
  };
  const previous = () => {
    const nextStep = current - 1;
    setCurrent(nextStep);
  };
  const nextButtonStatus =
    (clientId !== undefined && type === undefined && current === 1) ||
    (clientId === undefined && type === undefined && current === 0)
      ? true
      : false;
  const submitButtonStatus =
    type !== undefined &&
    clientId !== undefined &&
    (customOrderItems.length !== 0 || standardOrderItems.length !== 0)
      ? false
      : true;
  const onSubmit = () => {
    console.log(standardOrderItems);
    var customOrderItemsWithFiles = [];
    if (type === "niestandardowy") {
      for (let i = 0; i < customOrderItems.length; i++) {
        console.log(customOrderItems[i]);
        var files = [];
        for (
          let j = 0;
          j < customOrderItems[i].customProduct.fileList.length;
          j++
        ) {
          var newFile = {
            BlobName: "mock",
            FilePath: "mock",
            Type: "order",
            FileName: customOrderItems[i].customProduct.fileList[j].file.name,
            File: customOrderItems[i].customProduct.fileList[j].file,
          };
          files.push(newFile);
          console.log(newFile);
        }
        var newCustomOrderItem = {
          quantity: customOrderItems[i].quantity,
          customProduct: {
            name: customOrderItems[i].customProduct.name,
            orderDescription:
              customOrderItems[i].customProduct.orderDescription,
            fileList: [...files],
          },
        };
        customOrderItemsWithFiles.push(newCustomOrderItem);
        console.log("CustomOrder items with files");
        console.log(customOrderItemsWithFiles);
      }
    }
    var data = {
      clientId: clientId,
      type: type,
      salesmanId: 2,
      standardOrderItems: [...standardOrderItems],
      customOrderItems: [...customOrderItemsWithFiles],
    };
    var formData = objectToFormData(data);

    orders
      .create(formData)
      .then((res) => {
        console.log(res);
        setCurrent(0);
        setClientId();
        setClient({});
        setType();
        setCustomOrderItems([]);
        setStandardOrderItems([]);
        message.success("Pomyślnie złożono zamówienie");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div style={{ width: "100%", backgroundColor: "white", height: "100%" }}>
      <div
        style={{
          width: "100%",
          paddingInline: "80px",
          paddingTop: "40px",
          paddingBottom: "20px",
          margin: "auto",
        }}
      >
        <Steps current={current}>
          {steps.map((item) => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
      </div>
      <Divider plain />
      <div style={{ minHeight: "700px", paddingInline: "30px" }}>
        {steps[current].content}
      </div>
      <Divider plain />
      <div style={{ paddingBottom: "20px", borderBottom: "1px solid #F0F0F0" }}>
        {current > 0 && (
          <Button style={{ margin: "0 8px" }} onClick={() => previous()}>
            Wróć
          </Button>
        )}
        {current === steps.length - 1 && (
          <PopconfirmButton
            disabled={submitButtonStatus}
            name="Zatwierdź"
            handleClick={onSubmit}
          />
        )}
        {current < steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => next()}
            disabled={nextButtonStatus}
          >
            Dalej
          </Button>
        )}
      </div>
    </div>
  );
};

export default OrderSteps;