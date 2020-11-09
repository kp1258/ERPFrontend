import React from "react";
import Loader from "react-loader-spinner";
const ComponentLoader = () => {
  return (
    <div class="d-flex justify-content-center">
      <Loader type="Grid" color="#00BFFF" height={50} width={50} />
    </div>
  );
};

export default ComponentLoader;
