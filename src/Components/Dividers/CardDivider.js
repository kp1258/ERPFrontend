import React from "react";
import { Divider } from "antd";
const CardDivider = (props) => {
  return (
    <div>
      <Divider style={{ color: "gray" }} orientation="left">
        {props.content}
      </Divider>
    </div>
  );
};

export default CardDivider;
