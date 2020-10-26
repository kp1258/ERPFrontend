import React, { useState } from "react";
import { Row, Col } from "antd";
import { ClientsList } from "../../Components/Lists";
import { ClientSalesmanCard } from "../../Components/Cards";
import { clients as clientsData } from "../../Utils/Data";

const ClientsSalesmanPage = () => {
  const [client, setClient] = useState({});
  const handleChooseClient = (id) => {
    let clients = [...clientsData];
    let chosenClient = clients.find((client) => {
      return client.clientId === id;
    });
    setClient(chosenClient);
    console.log(chosenClient);
  };
  return (
    <div>
      <Row>
        <Col flex="auto">
          {client.address ? <ClientSalesmanCard client={client} /> : ""}
        </Col>
        <Col flex="300px">
          <ClientsList items={clientsData} handleClick={handleChooseClient} />
        </Col>
      </Row>
    </div>
  );
};

export default ClientsSalesmanPage;
