import React from "react";
import { Button, Space, Typography } from "antd";
import { useHistory } from "react-router-dom";
import { ProductIcon } from "../../Components/Icons";
const { Text, Title } = Typography;
const HomePage = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push("sign-in");
  };
  return (
    <div style={{ margin: "auto", height: "100%", paddingTop: "100px" }}>
      <Space direction="vertical">
        <Title>
          System ERP <ProductIcon />
        </Title>
        <Title level={4} type="secondary">
          Przejdź do strony logowania
        </Title>
        <Button type="primary" onClick={handleClick}>
          Logowanie
        </Button>
      </Space>
    </div>
  );
};

export default HomePage;
