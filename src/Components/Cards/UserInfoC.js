import React from "react";
import { Card, List } from "antd";

const UserInfoCard = (props) => {
  const data = [
    `Numer telefonu: ${props.phoneNumber}`,
    `E-mail: ${props.email}`,
    `Stanowisko: ${props.role}`,
  ];
  const title = `${props.firstName} ${props.lastName}`;
  return (
    <div className="userCard" style={{ display: "inline-block" }}>
      <Card
        hoverable
        title={title}
        style={{ fontSize: "150%" }}
        cover={<img alt="example" src={"/assets/userIcon.png"} />}
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
