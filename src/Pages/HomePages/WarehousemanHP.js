import React, { useContext } from "react";
import { WelcomeMessage, HomePageInfo } from "../../Components/Alerts";
import { UserContext } from "../../Contexts/UserContext";
import { PageLoader } from "../../Components/Loaders";
import useFetch from "../../Api/useFetch";

const WarehousemanHomePage = () => {
  const user = useContext(UserContext);
  const { response, isLoading, error } = useFetch({
    method: "get",
    url: "/orders/placed",
  });
  const orders = () => {
    const count = [...response].length;
    if (count === 1) {
      return "zamówienie oczekuje";
    } else if (count <= 4) {
      return "zamówienia oczekują";
    } else {
      return "zamówień oczekuje";
    }
  };
  const content =
    [...response].length > 0
      ? `${[...response].length} ${orders()} na rozpoczęcie realizacji`
      : "Nie ma nowych zamówień oczekujących na realizację";
  return (
    <div>
      <WelcomeMessage user={user} />
      {isLoading !== true ? (
        error === "" ? (
          <>
            <HomePageInfo content={content} />
          </>
        ) : (
          ""
        )
      ) : (
        <PageLoader />
      )}
    </div>
  );
};

export default WarehousemanHomePage;
