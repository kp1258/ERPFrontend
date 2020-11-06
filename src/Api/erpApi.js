import axios from "axios";
export const erpApi = axios.create({
  baseURL: "https://localhost:6001",
  timeout: 10000,
});

export const authenticationHeader = () => {
  return {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  };
};

export const users = {
  signIn: (params) => erpApi.post("/users/sign-in", params),
  getData: (id, params) =>
    erpApi.get(`/users/${id}`, { headers: authenticationHeader() }),
  create: (params) =>
    erpApi.post("/users", params, { headers: authenticationHeader() }),
  update: (id, params) =>
    erpApi.put(`/users/${id}`, params, { headers: authenticationHeader() }),
  changeStatus: (id, params) =>
    erpApi.patch(`/users/${id}`, params, { headers: authenticationHeader() }),
  changePasswordUser: (id, params) =>
    erpApi.post(`/users/change-password/${id}`, params, {
      headers: authenticationHeader(),
    }),
  changePasswordAdmin: (id, params) =>
    erpApi.post(`/users/change-password/admin/${id}`, params, {
      headers: authenticationHeader(),
    }),
};

export const clients = {
  create: (params) =>
    erpApi.post("/clients", params, { headers: authenticationHeader() }),
  update: (id, params) =>
    erpApi.put(`/clients/${id}`, params, { headers: authenticationHeader() }),
  changeStatus: (id, params) =>
    erpApi.patch(`/clients/${id}`, params, { headers: authenticationHeader() }),
};

export const orders = {
  create: (params) =>
    erpApi.post("/orders", params, { headers: authenticationHeader() }),
  acceptToRealization: (warehousemanId, orderId, params) =>
    erpApi.patch(`/warehousemen/${warehousemanId}/orders/${orderId}`, params, {
      headers: authenticationHeader(),
    }),
  complete: (warehousemanId, orderId, params) =>
    erpApi.patch(
      `/warehousemen/${warehousemanId}/orders/${orderId}/complete`,
      params,
      { headers: authenticationHeader() }
    ),
};

export const productWarehouse = {
  changeStock: (id, params) =>
    erpApi.patch(`/product-warehouse/${id}`, params, {
      headers: authenticationHeader(),
    }),
};

export const materialWarehouse = {
  changeStock: (id, params) =>
    erpApi.patch(`/material-warehouse/${id}`, params, {
      headers: authenticationHeader(),
    }),
};

export const standardProducts = {
  create: (params, config) =>
    erpApi.post("/standard-products", params, {
      headers: authenticationHeader(),
    }),
  update: (id, params) =>
    erpApi.put(`/standard-products/${id}`, params, {
      headers: authenticationHeader(),
    }),
  changeStatus: (id, params) =>
    erpApi.patch(`/standard-products/${id}`, params, {
      headers: authenticationHeader(),
    }),
};

export const categories = {
  create: (params) =>
    erpApi.post("/standard-products/categories", params, {
      headers: authenticationHeader(),
    }),
  update: (id, params) =>
    erpApi.put(`/standard-products/categories/${id}`, params, {
      headers: authenticationHeader(),
    }),
};

export const customProducts = {
  acceptToRealization: (technologistId, productId, params) =>
    erpApi.patch(
      `/technologists/${technologistId}/custom-products/${productId}`,
      params,
      { headers: authenticationHeader() }
    ),
  addSolution: (technologistId, productId, params) =>
    erpApi.post(
      `/technologists/${technologistId}/custom-products/${productId}/solution`,
      params,
      { headers: authenticationHeader() }
    ),
};

export const customOrderItems = {
  acceptToProduction: (managerId, itemId, params) =>
    erpApi.patch(
      `/production-managers/${managerId}/custom-order-items/${itemId}`,
      params,
      { headers: authenticationHeader() }
    ),
  complete: (mangerId, itemId, params) =>
    erpApi.patch(
      `/production-managers/${mangerId}/custom-order-items/${itemId}/complete`,
      params,
      { headers: authenticationHeader() }
    ),
};

export const materials = {
  create: (params) =>
    erpApi.post("/materials", params, { headers: authenticationHeader() }),
  update: (id, params) =>
    erpApi.put(`/materials/${id}`, params, { headers: authenticationHeader() }),
};
