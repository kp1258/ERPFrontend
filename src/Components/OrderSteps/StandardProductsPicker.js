import React from "react";
import useFetch from "../../Api/useFetch";
import { ComponentLoader } from "../Loaders";
import { StandardProductPickerList } from "../Lists";

const StandardProductsPicker = ({
  standardOrderItems,
  setStandardOrderItems,
}) => {
  const { response, isLoading } = useFetch({
    method: "get",
    url: "/standard-products",
  });
  return (
    <div>
      {isLoading === false ? (
        <div>
          {response !== "" ? (
            <StandardProductPickerList
              products={[...response]}
              standardOrderItems={standardOrderItems}
              setStandardOrderItems={setStandardOrderItems}
            />
          ) : (
            ""
          )}
        </div>
      ) : (
        <ComponentLoader />
      )}
    </div>
  );
};

export default StandardProductsPicker;
