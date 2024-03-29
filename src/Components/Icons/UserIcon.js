import React from "react";
import Icon from "@ant-design/icons";

const UserIconSmall = () => {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 57.4 57"
      enable-background="new 0 0 57.4 57"
      xmlSpace="preserve"
    >
      <g>
        <path
          fill="#111B44"
          d="M52.3,14.6C65.6,40,40.2,65.5,14.7,52.2c-4-2.1-7.2-5.3-9.3-9.3C-7.9,17.5,17.6-8,43.1,5.3
       C47,7.4,50.3,10.6,52.3,14.6z"
        />
        <g>
          <path
            fill="#FFFFFF"
            d="M28.9,27c4.8,0,8.7-3.9,8.7-8.7s-3.9-8.7-8.7-8.7s-8.7,3.9-8.7,8.7S24.1,27,28.9,27z"
          />
          <path
            fill="#FFFFFF"
            d="M36,27.2c-0.4-0.2-0.8,0-1,0.3c-1.3,2.2-3.6,3.5-6.2,3.5s-4.9-1.4-6.2-3.5c-0.2-0.3-0.6-0.5-1-0.3
           C15.2,30,11,36.4,11,43.5c0,0.4,0.3,0.8,0.8,0.8H46c0.4,0,0.8-0.3,0.8-0.8C46.7,36.4,42.5,30,36,27.2z"
          />
        </g>
      </g>
    </svg>
  );
};
const UserIcon = ({ props }) => {
  return <Icon component={UserIconSmall} {...props} />;
};

export default UserIcon;
