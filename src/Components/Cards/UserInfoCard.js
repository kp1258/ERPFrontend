import React from "react";
import { Card, List } from "antd";

import UserIcon from "../../assets/userIcon.png";
const UserInfoCard = (props) => {
  const data = [
    `Numer telefonu: ${props.phoneNumber}`,
    `E-Mail: ${props.eMail}`,
    `Stanowisko: ${props.role}`,
  ];
  const title = `${props.firstName} ${props.lastName}`;
  return (
    <div className="userCard">
      <Card
        title={title}
        style={{ fontSize: "150%" }}
        cover={<img alt="example" src={UserIcon} />}
      >
        <List
          dataSource={data}
          renderItem={(item) => (
            <>
              <List.Item>{item}</List.Item>
            </>
          )}
        />
      </Card>
    </div>
  );
};

export default UserInfoCard;
