import React from "react";
import { Select } from "antd";
import { ClientCard } from "../Cards";
import useFetch from "../../Api/useFetch";

const { Option } = Select;
const ClientPicker = ({ clientId, setClientId, client, setClient }) => {
  const { response, isLoading } = useFetch({
    method: "get",
    url: "/salesmen/2/clients",
  });
  const onChange = (value) => {
    setClientId(value);
    let clients = [...response];
    let client = clients.find((client) => {
      return client.clientId === value;
    });
    setClient(client);
  };
  return (
    <div>
      {isLoading === false ? (
        <>
          <Select
            value={clientId}
            placeholder="Wybierz klienta"
            onChange={(value) => {
              onChange(value);
            }}
          >
            {[...response].map((client) => (
              <Option key={client.clientId} value={client.clientId}>
                {client.companyName}
              </Option>
            ))}
          </Select>
          {client.address ? <ClientCard client={client} /> : ""}
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ClientPicker;
