import React from "react";
import FileItem from "./FileItem";
import { Space, Button } from "antd";
import { CloseOutlined } from "@ant-design/icons";
const FileItemButton = (props) => {
  const { onClick } = props;
  return (
    <Space>
      <FileItem {...props} />
      <Button
        style={{ backgroundColor: "gray" }}
        shape="circle-outline"
        icon={<CloseOutlined />}
        onClick={() => onClick(props.file.name)}
      />
    </Space>
  );
};

export default FileItemButton;
