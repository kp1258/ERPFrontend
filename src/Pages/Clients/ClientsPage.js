import React, { useState } from "react";
import { Row, Col } from "antd";
import { ClientsList } from "../../Components/Lists";
import { ClientAdminCard } from "../../Components/Cards";
import { clients as clientsData } from "../../Utils/Data";
import useFetch from "../../Utils/useFetch";
import { PageLoader } from "../../Components/Others";

const ClientsPage = () => {
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
              {client.address ? <ClientAdminCard client={client} /> : ""}
            </Col>
            <Col flex="300px">
              <ClientsList
                items={clientsData}
                handleClick={handleChooseClient}
              />
            </Col>
          </Row>
        </>
      ) : (
        <PageLoader />
      )}
    </div>
  );
};

export default ClientsPage;
