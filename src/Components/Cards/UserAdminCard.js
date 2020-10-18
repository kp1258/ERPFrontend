import React from "react";
import { Card, List, Button } from "antd";
import UserIcon from "../../assets/userIcon.png";
import EditUserModal from "../Modals/EditUserModal";
import { useState } from "react";
import "./index.css";
const btnStyle = {
  marginRight: "10px",
  marginBottom: "10px",
};
const UserAdminCard = (props) => {
  const { user } = props;
  const [visibleEdit, setVisibleEdit] = useState(false);
  const showEditModal = () => {
    setVisibleEdit(true);
  };
  const hideEditModal = () => {
    setVisibleEdit(false);
  };
  const data = [
    `Numer telefonu: ${user.phoneNumber}`,
    `E-Mail: ${user.eMail}`,
    `Login: ${user.login}`,
    `Stanowisko: ${user.role}`,
    `Status: ${user.status}`,
  ];
  const title = `${user.firstName} ${user.lastName}`;
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
        <Button type="primary" style={btnStyle} onClick={showEditModal}>
          Edytuj dane
        </Button>
        <Button type="primary" style={btnStyle}>
          Zmień status
        </Button>
        <Button type="primary" style={btnStyle}>
          Zmień hasło
        </Button>
      </Card>
      <EditUserModal
        visible={visibleEdit}
        user={user}
        hideModal={hideEditModal}
      />
    </div>
  );
};

export default UserAdminCard;
