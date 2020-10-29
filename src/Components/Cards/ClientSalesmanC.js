import React from "react";
import { Space, Button } from "antd";
import ClientAdminCard from "./ClientAdminC";
import { PopconfirmButton } from "../../Components/Buttons";
import { clients } from "../../Api/erpApi";
const ClientSalesmanCard = (props) => {
  const { client } = props;
  const handleClick = () => {
    var status = client.status === "aktywny" ? "nieaktywny" : "aktywny";
    var patch = [{ op: "replace", path: "/status", value: `${status}` }];
    console.log(patch);
    clients
      .changeStatus(client.clientId, patch)
      .then((res) => {
        console.log(res);
        props.toggleUpdate();
      })
      .catch((err) => console.log(err));
  };
  const footer = (
    <Space>
      <Button type="primary" onClick={props.showModal}>
        Edytuj dane
      </Button>
      <PopconfirmButton name="Zmień status" handleClick={handleClick} />
    </Space>
  );
  return (
    <div>
      <ClientAdminCard key={client.clientId} client={client} footer={footer} />
    </div>
  );
};

export default ClientSalesmanCard;
