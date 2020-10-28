import React, { useState } from "react";
import { Row, Col } from "antd";
import { ClientsList } from "../../Components/Lists";
import { ClientSalesmanCard } from "../../Components/Cards";
import { PageLoader } from "../../Components/Others";
import useFetch from "../../Api/useFetch";
import { NoDataAlert } from "../../Components/Alerts";

const ClientsSalesmanPage = () => {
  const { response, error, isLoading } = useFetch({
    method: "get",
    url: "/salesmen/2/clients",
  });
  console.log(response);
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
                {client.address ? <ClientSalesmanCard client={client} /> : ""}
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

export default ClientsSalesmanPage;
