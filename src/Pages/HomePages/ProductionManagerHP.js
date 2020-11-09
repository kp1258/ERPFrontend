import React, { useContext } from "react";
import { WelcomeMessage } from "../../Components/Alerts";
import { UserContext } from "../../Contexts/UserContext";
import { HomePageInfo } from "../../Components/Alerts";
import useFetch from "../../Api/useFetch";
import { PageLoader } from "../../Components/Loaders";

const ProductionManagerHomePage = () => {
  const user = useContext(UserContext);
  const { response, isLoading, error } = useFetch({
    method: "get",
    url: `/production-managers/${user.userId}/standard-products`,
  });
  const products = [...response].length === 1 ? "produktu" : "produktów";
  const content =
    [...response].length > 0
      ? `W magazynie brakuje ${[...response].length} ${products}`
      : "W magazynie nie barkuje produktów standardowych";
  return (
    <div>
      <WelcomeMessage user={user} />
      {isLoading !== true ? (
        error === "" ? (
          <>
            {[...response].length > 0 ? <HomePageInfo content={content} /> : ""}
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

export default ProductionManagerHomePage;
