import React from "react";
import { Modal } from "antd";
import { EditMaterialForm } from "../Forms";
import { propTypes } from "react-bootstrap/esm/Image";

const EditMaterialModal = (props) => {
  return (
    <>
      <Modal visible={props.visible}>
        <EditMaterialForm material={props.material} />
      </Modal>
    </>
  );
};

export default EditMaterialModal;
