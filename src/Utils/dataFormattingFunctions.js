export function objectToFormData(obj, rootName) {
  var formData = new FormData();

  function appendFormData(data, root) {
    root = root || "";
    if (data instanceof File) {
      formData.append(root, data);
    } else if (Array.isArray(data)) {
      for (var i = 0; i < data.length; i++) {
        if (data[i] instanceof File) {
          appendFormData(data[i], root);
        } else {
          appendFormData(data[i], root + "[" + i + "]");
        }
      }
    } else if (typeof data === "object" && data) {
      for (var key in data) {
        if (data.hasOwnProperty(key)) {
          if (root === "") {
            appendFormData(data[key], key);
          } else {
            appendFormData(data[key], root + "." + key);
          }
        }
      }
    } else {
      if (data !== null && typeof data !== "undefined") {
        formData.append(root, data);
      }
    }
  }
  appendFormData(obj, rootName);

  return formData;
}
