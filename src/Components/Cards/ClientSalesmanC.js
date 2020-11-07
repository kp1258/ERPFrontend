import React, { useState } from "react";
import { Space, Button } from "antd";
import ClientCard from "./ClientC";
import { PopconfirmButton } from "../../Components/Buttons";
import { clients } from "../../Api/erpApi";
import { CenteredDivider } from "../Dividers";
import { handleResponse } from "../../Api/handleResponse";
const ClientSalesmanCard = (props) => {
  const { client } = props;
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = () => {
    setIsLoading(true);
    var status = client.status === "Aktywny" ? "Nieaktywny" : "Aktywny";
    var patch = [{ op: "replace", path: "/status", value: `${status}` }];
    console.log(patch);
    clients
      .changeStatus(client.clientId, patch)
      .then((res) => {
        console.log(res);
        props.toggleUpdate();
        handleResponse(res, "Pomyślnie zmieniono status klienta");
      })
      .catch((err) => {
        handleResponse(err, "Coś poszło nie tak przy zmianie statusu klienta");
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  };
  const footer = (
    <>
      <CenteredDivider content="Akcje" />
      <Space>
        <Button type="primary" onClick={props.showModal}>
          Edytuj dane
        </Button>
        <PopconfirmButton
          name="Zmień status"
          handleClick={handleClick}
          loading={isLoading}
        />
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
