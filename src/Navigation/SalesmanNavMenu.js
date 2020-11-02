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
    sectionName: "Klienci",
    subsections: [
      {
        id: 2,
        name: "Przeglądaj",
        ref: "/clients/salesman",
      },
      {
        id: 3,
        name: "Dodaj",
        ref: "/clients/create",
      },
    ],
  },
  {
    id: 3,
    sectionName: "Zamówienia",
    subsections: [
      {
        id: 4,
        name: "Aktywne zamówienia",
        ref: "/orders/active/salesman",
      },
      {
        id: 5,
        name: "Historia",
        ref: "/orders/history/salesman",
      },
      {
        id: 6,
        name: "Złóż zamówienie",
        ref: "/orders/create",
      },
    ],
  },
  {
    id: 4,
    sectionName: "Magazyn Produktów",
    subsections: [
      {
        id: 7,
        name: "Przeglądaj",
        ref: "/warehouse/products",
      },
    ],
  },
  {
    id: 5,
    sectionName: "Produkty Standardowe",
    subsections: [
      {
        id: 8,
        name: "Przeglądaj katalog",
        ref: "/standard-products",
      },
    ],
  },
  {
    id: 6,
    sectionName: "Produkty na zamówienie",
    subsections: [
      {
        id: 9,
        name: "Z moich zamówień",
        ref: "/custom-products/salesman",
      },
      {
        id: 10,
        name: "Historia",
        ref: "/custom-products/history/salesman",
      },
    ],
  },
];
const SalesmanNavMenu = () => {
  return (
    <>
      <NavMenu options={options} />
    </>
  );
};

export default SalesmanNavMenu;
