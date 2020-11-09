import React from "react";
import { Alert } from "antd";
const HomePageInfo = ({ content }) => {
  return (
    <div class="d-flex justify-content-center">
      <Alert
        style={{
          fontSize: "150%",
          width: "50%",
          height: "30%",
          marginTop: "5%",
          padding: "40px",
        }}
        message={content}
        type="info"
      />
    </div>
  );
};

export default HomePageInfo;
