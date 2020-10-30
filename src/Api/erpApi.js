import axios from "axios";
export const erpApi = axios.create({
  baseURL: "https://localhost:6001",
  timeout: 10000,
});

export const users = {
  create: (params) => erpApi.post("/users", params),
  update: (id, params) => erpApi.put(`/users/${id}`, params),
  changeStatus: (id, params) => erpApi.patch(`/users/${id}`, params),
};

export const clients = {
  create: (params) => erpApi.post("/clients", params),
  update: (id, params) => erpApi.put(`/clients/${id}`, params),
  changeStatus: (id, params) => erpApi.patch(`/clients/${id}`, params),
};

export const orders = {
  create: (params) => erpApi.post("/orders", params),
  acceptToRealization: (warehousemanId, orderId, params) =>
    erpApi.patch(`/warehousemen/${warehousemanId}/orders/${orderId}`, params),
  complete: (warehousemanId, orderId, params) =>
    erpApi.patch(
      `/warehousemen/${warehousemanId}/orders/${orderId}/complete`,
      params
    ),
};

export const productWarehouse = {
  changeStock: (id, params) => erpApi.patch(`/product-warehouse/${id}`, params),
};

export const materialWarehouse = {
  changeStock: (id, params) =>
    erpApi.patch(`/material-warehouse/${id}`, params),
};

export const standardProducts = {
  create: (params, config) => erpApi.post("/standard-products", params, config),
  update: (id, params) => erpApi.put(`/standard-products/${id}`, params),
  changeStatus: (id, params) =>
    erpApi.patch(`/standard-products/${id}`, params),
};

export const categories = {
  create: (params) => erpApi.post("/standard-products/categories", params),
  update: (id, params) =>
    erpApi.put(`/standard-products/categories/${id}`, params),
};

export const customProducts = {
  acceptToRealization: (technologistId, productId, params) =>
    erpApi.patch(
      `/technologists/${technologistId}/custom-products/${productId}`,
      params
    ),
  addSolution: (technologistId, productId, params) =>
    erpApi.patch(
      `/technologists/${technologistId}/custom-products/${productId}/solution`,
      params
    ),
};

export const customOrderItems = {
  acceptToRealization: (managerId, itemId, params) =>
    erpApi.patch(
      `/production-managers/${managerId}/custom-order-items/${itemId}`,
      params
    ),
  complete: (mangerId, itemId, params) =>
    erpApi.patch(
      `/production-managers/${mangerId}/custom-order-items/${itemId}/complete`,
      params
    ),
};

export const materials = {
  create: (params) => erpApi.post("/materials", params),
  update: (id, params) => erpApi.put(`/materials/${id}`, params),
};
