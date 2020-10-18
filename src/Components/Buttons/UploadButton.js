import React from "react";
import { Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useState } from "react";
const options = {
  multiple: true,
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
};

const UploadButton = (props) => {
  const [files, setFiles] = useState([]);

  const handleChange = (info) => {
    let fileList = [...info.fileList];

    fileList = fileList.slice(-props.limit);
    fileList = fileList.map((file) => {
      if (file.response) {
        file.url = file.response.url;
      }
      return file;
    });
    setFiles({ fileList });
  };
  return (
    <Upload {...options} onChange={handleChange}>
      <Button icon={<UploadOutlined />}>Dodaj plik</Button>
    </Upload>
  );
};

export default UploadButton;
