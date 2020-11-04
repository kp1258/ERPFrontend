import React from "react";
import Loader from "react-loader-spinner";
const PageLoader = () => {
  return (
    <div style={{ display: "block", margin: "auto" }}>
      <Loader type="Grid" color="#00BFFF" height={80} width={80} />
    </div>
  );
};

export default PageLoader;
