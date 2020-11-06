import React from "react";
import { Space, Button } from "antd";
import ClientCard from "./ClientC";
import { PopconfirmButton } from "../../Components/Buttons";
import { clients } from "../../Api/erpApi";
import { CenteredDivider } from "../Dividers";
const ClientSalesmanCard = (props) => {
  const { client } = props;
  const handleClick = () => {
    var status = client.status === "Aktywny" ? "Nieaktywny" : "Aktywny";
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
    <>
      <CenteredDivider content="Akcje" />
      <Space>
        <Button type="primary" onClick={props.showModal}>
          Edytuj dane
        </Button>
        <PopconfirmButton name="Zmień status" handleClick={handleClick} />
      </Space>
    </>
  );
  return (
    <div>
      <ClientCard key={client.clientId} client={client} footer={footer} />
    </div>
  );
};

export default ClientSalesmanCard;
