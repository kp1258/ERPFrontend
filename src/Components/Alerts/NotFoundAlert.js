import React from "react";
import { Alert } from "antd";
const NotFoundAlert = () => {
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
        message="Nie znaleziono strony o podanym adresie"
        type="error"
        showIcon
      />
    </div>
  );
};

export default NotFoundAlert;
