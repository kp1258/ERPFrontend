import React from "react";
import { Alert } from "antd";
const UnauthorizedAlert = () => {
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
        message="Brak uprawnień dostępu do żądanego zasobu"
        type="warning"
        showIcon
      />
    </div>
  );
};

export default UnauthorizedAlert;
