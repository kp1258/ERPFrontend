import React, { useContext } from "react";
import { WelcomeMessage, HomePageInfo } from "../../Components/Alerts";
import { UserContext } from "../../Contexts/UserContext";
import useFetch from "../../Api/useFetch";
import { PageLoader } from "../../Components/Loaders";

const SalesmanHomePage = () => {
  const user = useContext(UserContext);
  const { response, isLoading, error } = useFetch({
    method: "get",
    url: `/orders/active?SalesmanId=${user.userId}`,
  });
  const orders = () => {
    const count = [...response].length;
    if (count === 1) {
      return "zamówienie jest";
    } else if (count <= 4) {
      return "zamówienia są";
    } else {
      return "zamówień jest";
    }
  };
  const content =
    [...response].length > 0
      ? `${[...response].length} ${orders()} w trakcie realizacji`
      : "Nie ma zamówień w realizacji";
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

export default SalesmanHomePage;
