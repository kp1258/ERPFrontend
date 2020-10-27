import axios from "axios";
export const erpApi = axios.create({ baseURL: "https://localhost:6001" });

const users = {
  create: (params) => erpApi.post("/users", { params }),
  changeStatus: (params) => erpApi.patch(`/users/${params.id}`, { params }),
};
