import React, { useContext } from "react";
import { Button, Dropdown, Menu, PageHeader } from "antd";
import { Link } from "react-router-dom";
import { users } from "../Utils/users";
import { UserButton } from "../Components/Buttons";
import { UserContext, UserDispatchContext } from "../Contexts/UserContext";
import UserIcon from "../Components/Icons/UserIcon";

const menu = (
  <Menu>
    <Menu.Item>Zmień hasło</Menu.Item>
    <Menu.Item>Wyloguj się</Menu.Item>
  </Menu>
);
const DropdownMenu = () => {
  return (
    <Dropdown overlay={menu} placement="bottomRight">
      <Button
        shape="circle"
        icon={<UserIcon />}
        style={{
          backgroundColor: "#111B44",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      />
    </Dropdown>
  );
};

const AppBar = () => {
  const user = useContext(UserContext);
  const setUser = useContext(UserDispatchContext);

  return (
    <div>
      <PageHeader extra={[<Link to="/" />, <DropdownMenu />]}>
        {/* <Menu mode="horizontal">
          <Menu.Item
            onClick={() => {
              setUser(users[0]);
            }}
          >
            Administrator
          </Menu.Item>
          <Menu.Item
            onClick={() => {
              setUser(users[1]);
            }}
          >
            Technolog
          </Menu.Item>
          <Menu.Item
            onClick={() => {
              setUser(users[2]);
            }}
          >
            Kierownik produkcji
          </Menu.Item>
          <Menu.Item
            onClick={() => {
              setUser(users[3]);
            }}
          >
            Handlowiec
          </Menu.Item>
          <Menu.Item
            onClick={() => {
              setUser(users[4]);
            }}
          >
            Magazynier
          </Menu.Item>
        </Menu> */}
        <span style={{ fontSize: "20px" }}>
          {user.firstName} {user.lastName},{" "}
        </span>
        <span style={{ fontSize: "20px" }}>{user.role}</span>
      </PageHeader>
    </div>
  );
};

export default AppBar;
