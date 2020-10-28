import React from "react";
import { Alert } from "antd";

const NoDataAlert = (props) => {
  return (
    <div class="d-flex justify-content-center">
      <Alert
        style={{
          fontSize: "150%",
          width: "50%",
          height: "30%",
          marginTop: "10%",
          padding: "40px",
        }}
        message={props.content}
        type="info"
        showIcon
      />
    </div>
  );
};

export default NoDataAlert;
