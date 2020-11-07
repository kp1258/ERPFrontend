import React from "react";
import { Popconfirm, Button } from "antd";
const PopconfirmButton = (props) => {
  return (
    <Popconfirm
      title="Jesteś pewien?"
      placement="top"
      okText="Tak"
      cancelText="Nie"
      onConfirm={props.handleClick}
    >
      <Button
        style={props.btnStyle}
        type="primary"
        disabled={props.disabled}
        loading={props.loading}
      >
        {props.name}
      </Button>
    </Popconfirm>
  );
};

export default PopconfirmButton;
