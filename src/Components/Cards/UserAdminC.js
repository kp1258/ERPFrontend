import React, { useState } from "react";
import { Card, List, Button } from "antd";

import { EditUserModal } from "../../Components/Modals";
import { PopconfirmButton } from "../../Components/Buttons";
import { users } from "../../Api/erpApi";

import "./index.css";
const btnStyle = {
  marginRight: "10px",
};
const UserAdminCard = (props) => {
  const { user } = props;
  const [visible, setVisible] = useState(false);
  const data = [
    `Numer telefonu: ${user.phoneNumber}`,
    `E-mail: ${user.email}`,
    `Login: ${user.login}`,
    `Stanowisko: ${user.role}`,
    `Status: ${user.status}`,
  ];
  const handleClick = () => {
    var status = user.status === "aktywny" ? "nieaktywny" : "aktywny";
    var patch = [{ op: "replace", path: "/status", value: `${status}` }];
    console.log(patch);
    users
      .changeStatus(user.userId, patch)
      .then((res) => {
        console.log(res);
        props.toggleUpdate();
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="userCard">
      <Card
        title={`${user.firstName} ${user.lastName}`}
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
        <Button
          type="primary"
          style={btnStyle}
          onClick={() => {
            setVisible(true);
          }}
        >
          Edytuj dane
        </Button>
        <PopconfirmButton
          handleClick={() => handleClick()}
          style={btnStyle}
          name="Zmień status"
        />
        <Button type="primary" style={btnStyle}>
          Zmień hasło
        </Button>
        {user ? (
          <EditUserModal
            key={user.userId}
            visible={visible}
            user={user}
            hideModal={() => setVisible(false)}
            toggleUpdate={props.toggleUpdate}
          />
        ) : (
          ""
        )}
      </Card>
    </div>
  );
};

export default UserAdminCard;
