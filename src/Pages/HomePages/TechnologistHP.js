import React, { useContext } from "react";
import { WelcomeMessage, HomePageInfo } from "../../Components/Alerts";
import { UserContext } from "../../Contexts/UserContext";
import { PageLoader } from "../../Components/Loaders";
import useFetch from "../../Api/useFetch";

const TechnologistHomePage = () => {
  const user = useContext(UserContext);
  const { response, isLoading, error } = useFetch({
    method: "get",
    url: "/custom-products/ordered",
  });
  const products = () => {
    const count = [...response].length;
    if (count === 1) {
      return "produkt na zamówienie oczekuje";
    } else if (count <= 4) {
      return "produkty na zamówienie oczekują";
    } else {
      return "produktów na zamówienie oczekuje";
    }
  };
  const content =
    [...response].length > 0
      ? `${[...response].length} ${products()} na rozpoczęcie realizacji`
      : "Nie ma nowych produktów na zamówienie oczekujących na realizację";
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

export default TechnologistHomePage;
