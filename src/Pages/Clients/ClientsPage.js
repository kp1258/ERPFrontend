import React, { useState } from "react";
import { Row, Col } from "antd";
import { ClientsList } from "../../Components/Lists";
import { ClientCard } from "../../Components/Cards";
import useFetch from "../../Api/useFetch";
import { PageLoader } from "../../Components/Loaders";
import { NoDataAlert } from "../../Components/Alerts";

const ClientsPage = () => {
  const { response, isLoading } = useFetch({
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
          {response !== "" ? (
            <Row>
              <Col flex="auto">
                {client.address ? <ClientCard client={client} /> : ""}
              </Col>
              <Col flex="300px">
                <ClientsList
                  items={[...response]}
                  handleClick={handleChooseClient}
                />
              </Col>
            </Row>
          ) : (
            <NoDataAlert content="Brak klientów w bazie" />
          )}
        </>
      ) : (
        <PageLoader />
      )}
    </div>
  );
};

export default ClientsPage;
