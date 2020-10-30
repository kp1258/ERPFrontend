import React from "react";
import { Upload, Button, Input } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useState } from "react";

const UploadButton = (props) => {
  return <input type="file" name={props.name} ref={props.register} />;
};

export default UploadButton;
