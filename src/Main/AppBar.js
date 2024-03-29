import React, { useContext } from "react";
import { Button, Dropdown, Menu, PageHeader, Tag } from "antd";
import { Link, useHistory } from "react-router-dom";
import { determinePath } from "../Utils/authenticationFunctions";
import { UserContext, UserDispatchContext } from "../Contexts/UserContext";
import { SignInButton } from "../Components/Buttons";
import UserIcon from "../Components/Icons/UserIcon";

const DropdownMenu = () => {
  const history = useHistory();
  const setUser = useContext(UserDispatchContext);
  const signOut = () => {
    setUser({ role: "anonymous" });
    history.push("/");
  };
  const menu = (
    <Menu>
      <Menu.Item>
        <a href="/change-password">Zmień hasło</a>
      </Menu.Item>
      <Menu.Item onClick={() => signOut()}>Wyloguj się</Menu.Item>
    </Menu>
  );
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
  const title =
    user.role !== "anonymous" ? (
      <Link
        style={{ color: "white", fontSize: "30px" }}
        to={`/${determinePath(user)}`}
      >
        System ERP
      </Link>
    ) : (
      <Link to="/" style={{ color: "white", fontSize: "30px" }}>
        System ERP
      </Link>
    );
  const subTitle =
    user.role !== "anonymous" ? (
      <div style={{ fontSize: "20px", color: "white", marginLeft: "20px" }}>
        {user.firstName} {user.lastName}
      </div>
    ) : (
      ""
    );
  const tag =
    user.role !== "anonymous" ? (
      <Tag style={{ fontSize: "15px" }} color="blue">
        {user.role}
      </Tag>
    ) : (
      ""
    );
  const dropdownMenu = user.role !== "anonymous" ? <DropdownMenu /> : <></>;
  return (
    <div>
      <PageHeader
        title={title}
        tags={tag}
        subTitle={subTitle}
        extra={[dropdownMenu]}
      ></PageHeader>
    </div>
  );
};

export default AppBar;
