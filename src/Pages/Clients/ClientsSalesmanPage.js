import React, { useState } from "react";
import { Row, Col } from "antd";
import { ClientsList } from "../../Components/Lists";
import { ClientSalesmanCard } from "../../Components/Cards";
import { PageLoader } from "../../Components/Others";
import useFetch from "../../Utils/useFetch";

const ClientsSalesmanPage = () => {
  const { response, error, isLoading } = useFetch({
    method: "get",
    url: "/clients",
  });
  const [client, setClient] = useState({});
  const handleChooseClient = (id) => {
    let clients = [...response];
    let chosenClient = clients.find((client) => {
      return client.clientId === id;
    });
    setClient(chosenClient);
    console.log(chosenClient);
  };
  return (
    <div>
      {isLoading === false ? (
        <>
          <Row>
            <Col flex="auto">
              {client.address ? <ClientSalesmanCard client={client} /> : ""}
            </Col>
            <Col flex="300px">
              <ClientsList items={response} handleClick={handleChooseClient} />
            </Col>
          </Row>
        </>
      ) : (
        <PageLoader />
      )}
    </div>
  );
};

export default ClientsSalesmanPage;
