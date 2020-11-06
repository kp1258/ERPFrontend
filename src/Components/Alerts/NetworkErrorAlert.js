import React from "react";
import { Alert } from "antd";
const NetworkErrorAlert = () => {
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
        message="Błąd połączenia z serwerem"
        type="error"
        showIcon
      />
    </div>
  );
};

export default NetworkErrorAlert;
