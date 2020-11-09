import React, { useState } from "react";
import { Card, List, Button } from "antd";
import { inactiveCardColor } from "../../Utils/sharedStyles";
import { EditUserModal, ChangePasswordModal } from "../../Components/Modals";
import { PopconfirmButton } from "../../Components/Buttons";
import { users } from "../../Api/erpApi";

import "./index.css";
import { handleResponse } from "../../Api/handleResponse";
const btnStyle = {
  marginRight: "10px",
};
const UserAdminCard = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const { user } = props;
  const [visibleEdit, setVisibleEdit] = useState(false);
  const [visiblePassword, setVisiblePassword] = useState(false);
  const data = [
    `Numer telefonu: ${user.phoneNumber}`,
    `E-mail: ${user.email}`,
    `Login: ${user.login}`,
    `Stanowisko: ${user.role}`,
    `Status: ${user.status}`,
  ];
  const color = user.status === "Nieaktywny" ? inactiveCardColor : "";
  const hoverable = user.status === "Nieaktywny" ? false : true;
  const handleClick = () => {
    setIsLoading(true);
    var status = user.status === "Aktywny" ? "Nieaktywny" : "Aktywny";
    var patch = [{ op: "replace", path: "/status", value: `${status}` }];
    console.log(patch);
    users
      .changeStatus(user.userId, patch)
      .then((res) => {
        console.log(res);
        props.toggleUpdate();
        handleResponse(res, "Pomyślnie zmieniono status pracownika");
      })
      .catch((err) => {
        console.log(err);
        handleResponse(err, "Coś poszło nie tak");
      })
      .finally(() => setIsLoading(false));
  };
  return (
    <div className="userCard">
      <Card
        hoverable={hoverable}
        title={`${user.firstName} ${user.lastName}`}
        style={{ fontSize: "150%", backgroundColor: color }}
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
            setVisibleEdit(true);
          }}
        >
          Edytuj dane
        </Button>
        <PopconfirmButton
          handleClick={() => handleClick()}
          style={btnStyle}
          name="Zmień status"
          loading={isLoading}
        />
        <Button
          type="primary"
          style={btnStyle}
          onClick={() => setVisiblePassword(true)}
        >
          Zmień hasło
        </Button>
        {user ? (
          <>
            <EditUserModal
              key={user.userId}
              visible={visibleEdit}
              user={user}
              hideModal={() => setVisibleEdit(false)}
              toggleUpdate={props.toggleUpdate}
            />
            <ChangePasswordModal
              key={user.userId}
              visible={visiblePassword}
              userId={user.userId}
              hideModal={() => setVisiblePassword(false)}
            />
          </>
        ) : (
          ""
        )}
      </Card>
    </div>
  );
};

export default UserAdminCard;
