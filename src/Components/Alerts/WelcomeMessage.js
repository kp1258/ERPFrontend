import React from "react";
import { Space, Typography } from "antd";
import { UserContext } from "../../Contexts/UserContext";
const { Title } = Typography;
const WelcomeMessage = ({ user }) => {
  return (
    <div style={{ margin: "auto", height: "100%", paddingTop: "100px" }}>
      <Space direction="vertical">
        <Title>
          Witaj {user.firstName} {user.lastName}
        </Title>
      </Space>
    </div>
  );
};
export default WelcomeMessage;
