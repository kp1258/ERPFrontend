import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";
import { ClientsList } from "../../Components/Lists";
import { ClientSalesmanCard } from "../../Components/Cards";
import { PageLoader } from "../../Components/Loaders";
import useFetch from "../../Api/useFetch";
import { NoDataAlert } from "../../Components/Alerts";
import { EditClientModal } from "../../Components/Modals";

const ClientsSalesmanPage = () => {
  const [triggerUpdate, setTriggerUpdate] = useState(false);
  const [client, setClient] = useState({});
  const [visible, setVisible] = useState(false);

  const { response, isLoading, refetch } = useFetch({
    method: "get",
    url: "/salesmen/2/clients",
  });
  useEffect(() => {
    console.log("use effect triggered");
    refreshClient();
  }, [triggerUpdate, response]);

  const toggleTrigger = () => {
    refetch({});
    setTriggerUpdate(!triggerUpdate);
  };
  const refreshClient = () => {
    client.address
      ? handleChooseClient(client.clientId)
      : console.log("nothing");
  };
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
            <>
              <Row>
                <Col flex="auto">
                  {client.address ? (
                    <ClientSalesmanCard
                      key={client.clientId}
                      client={client}
                      showModal={() => setVisible(true)}
                      toggleUpdate={toggleTrigger}
                    />
                  ) : (
                    ""
                  )}
                </Col>
                <Col flex="300px">
                  <ClientsList
                    items={[...response]}
                    handleClick={handleChooseClient}
                  />
                </Col>
              </Row>
              <EditClientModal
                client={client}
                visible={visible}
                toggleUpdate={toggleTrigger}
                hideModal={() => setVisible(false)}
              />
            </>
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
