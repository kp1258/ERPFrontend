import React from "react";
import { Divider } from "antd";
const CenteredDivider = (props) => {
  return (
    <div>
      <Divider style={{ color: "gray" }}>{props.content}</Divider>
    </div>
  );
};

export default CenteredDivider;
