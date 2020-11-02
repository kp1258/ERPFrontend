import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

const { SubMenu } = Menu;

const NavMenu2 = (props) => {
  // const [openKeys, setOpenKeys] = useState();

  // const onOpenChange = (openKeysProp) => {
  //   const latestOpenKey = openKeysProp.find(
  //     (key) => openKeys.indexOf(key) === -1
  //   );
  //   if (props.options.indexOf(latestOpenKey) === -1) {
  //     setOpenKeys({ openKeysProp });
  //   } else {
  //     setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
  //   }
  // };
  const handleClick = (e) => {
    console.log("click", e);
  };
  return (
    <>
      <Menu
        onClick={handleClick}
        // openKeys={openKeys}
        // onOpenChange={onOpenChange}
        theme="dark"
        mode="inline"
        style={{ height: "100%", borderRight: 0, width: "250px" }}
      >
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

export default NavMenu2;
