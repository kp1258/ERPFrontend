import React, { useState } from "react";
import { Row, Col } from "antd";
import { ClientsList } from "../../Components/Lists";
import { ClientCard } from "../../Components/Cards";
import useFetch from "../../Api/useFetch";
import { PageLoader } from "../../Components/Loaders";
import { NoDataAlert, NetworkErrorAlert } from "../../Components/Alerts";

const ClientsPage = () => {
  const token = localStorage.getItem("token");
  const { response, isLoading, error } = useFetch({
    method: "get",
    url: "/clients",
    token: token,
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
    <div style={{ height: "100%" }}>
      {isLoading === false ? (
        <>
          {error === "" ? (
            response !== "" ? (
              <div style={{ height: "100%" }}>
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
              </div>
            ) : (
              <NoDataAlert content="Brak klientów w bazie" />
            )
          ) : (
            <NetworkErrorAlert />
          )}
        </>
      ) : (
        <PageLoader />
      )}
    </div>
  );
};

export default ClientsPage;
