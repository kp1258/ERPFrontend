import React from "react";
import Loader from "react-loader-spinner";
const PageLoader = () => {
  return (
    <div class="d-flex justify-content-center" style={{ margin: "auto" }}>
      <Loader type="Grid" color="#00BFFF" height={80} width={80} />
    </div>
  );
};

export default PageLoader;
