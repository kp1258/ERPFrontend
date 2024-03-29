import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

const { SubMenu } = Menu;

const NavMenu = (props) => {
  const handleClick = (e) => {
    console.log("click", e);
  };
  return (
    <>
      <Menu onClick={handleClick} theme="dark" mode="inline">
        {props.options.map((option) => (
          <SubMenu key={option.id} title={<span>{option.sectionName}</span>}>
            {option.subsections.map((subsection) => (
              <Menu.Item key={subsection.id}>
                <span>{subsection.name}</span>
                <Link to={subsection.ref} />
              </Menu.Item>
            ))}
          </SubMenu>
        ))}
      </Menu>
    </>
  );
};

export default NavMenu;
