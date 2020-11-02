import React from "react";
import NavMenu from "./NavMenu";
const options = [
  {
    id: 1,
    sectionName: "Pracownicy",
    subsections: [
      {
        id: 1,
        name: "Przeglądaj",
        ref: "/users",
      },
    ],
  },
  {
    id: 2,
    sectionName: "Zamówienia",
    subsections: [
      {
        id: 2,
        name: "Do zrealizowania",
        ref: "/orders/to-realize",
      },
      {
        id: 3,
        name: "W realizacji",
        ref: "/orders/in-realization",
      },
      {
        id: 4,
        name: "Historia",
        ref: "/orders/history/warehouseman",
      },
    ],
  },
  {
    id: 3,
    sectionName: "Magazyn produktów",
    subsections: [
      {
        id: 5,
        name: "Zmień stan",
        ref: "/warehouse/products/change-stock",
      },
    ],
  },
  {
    id: 4,
    sectionName: "Magazyn materiałów",
    subsections: [
      {
        id: 6,
        name: "Zmień stan",
        ref: "/warehouse/materials/change-stock",
      },
    ],
  },
  {
    id: 7,
    sectionName: "Produkty na zamówienie",
    subsections: [
      {
        id: 7,
        name: "W realizacji",
        ref: "/custom-products/warehouseman",
      },
      {
        id: 8,
        name: "Historia",
        ref: "/custom-products/history/warehouseman",
      },
    ],
  },
  {
    id: 8,
    sectionName: "Materiały",
    subsections: [
      {
        id: 9,
        name: "Przeglądaj",
        ref: "/materials",
      },
      {
        id: 10,
        name: "Dodaj",
        ref: "/materials/create",
      },
    ],
  },
];
const WarehousemanNavMenu = () => {
  return (
    <>
      <NavMenu options={options} />
    </>
  );
};

export default WarehousemanNavMenu;
