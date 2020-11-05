import React from "react";
import { Select } from "antd";
import useFetch from "../../Api/useFetch";
import ClientInfo from "./ClientInfo";
import { ComponentLoader } from "../Loaders";

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
      <div
        style={{ fontSize: "125%", paddingTop: "20px", paddingBottom: "20px" }}
      >
        Wybierz odbiorcę
      </div>
      {isLoading === false ? (
        <div>
          <div style={{ paddingBottom: "20px", paddingTop: "20px" }}>
            <Select
              style={{ width: "300px" }}
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
          </div>
          {client.address ? <ClientInfo client={client} /> : ""}
        </div>
      ) : (
        <>
          <ComponentLoader />
        </>
      )}
    </div>
  );
};

export default ClientPicker;
