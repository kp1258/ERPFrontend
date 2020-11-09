import React from "react";
import useFetch from "../../Api/useFetch";
import { ComponentLoader } from "../Loaders";
import { StandardProductPickerList } from "../Lists";
import { NetworkErrorAlert } from "../Alerts";

const StandardProductsPicker = ({
  standardOrderItems,
  setStandardOrderItems,
}) => {
  const { response, isLoading, error } = useFetch({
    method: "get",
    url: "/standard-products/produced",
  });
  return (
    <div>
      {isLoading === false ? (
        <div>
          {error === "" ? (
            response !== "" ? (
              <StandardProductPickerList
                products={[...response]}
                standardOrderItems={standardOrderItems}
                setStandardOrderItems={setStandardOrderItems}
              />
            ) : (
              ""
            )
          ) : (
            <NetworkErrorAlert />
          )}
        </div>
      ) : (
        <ComponentLoader />
      )}
    </div>
  );
};

export default StandardProductsPicker;
