import { Modal } from "antd";

export const handleResponse = (response, message) => {
  if (response.status < 300 && response.status >= 200) {
    setTimeout(
      () =>
        Modal.success({
          content: message,
        }),
      600
    );
  } else if (response.status === 401) {
    Modal.error({
      content: "Brak uprawnień do wykonania żądanej operacji",
    });
  } else {
    Modal.error({
      content: message,
    });
  }
};
