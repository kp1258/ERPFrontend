import React from "react";
import FileItem from "./FileItem";
import { Space, Button } from "antd";
import { CancelIcon } from "../Icons";
const FileItemButton = (props) => {
  const { handleCancel } = props;
  return (
    <Space>
      <FileItem {...props} />
      <Button
        style={{ backgroundColor: "red" }}
        shape="circle-outline"
        icon={<CancelIcon />}
        onClick={() => handleCancel(props.file.filePath)}
      />
    </Space>
  );
};

export default FileItemButton;
