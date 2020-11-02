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
    sectionName: "Magazyn Produktów",
    subsections: [
      {
        id: 2,
        name: "Przeglądaj",
        ref: "/warehouse/products",
      },
    ],
  },
  {
    id: 3,
    sectionName: "Magazyn Materiałów",
    subsections: [
      {
        id: 3,
        name: "Przeglądaj",
        ref: "/warehouse/materials",
      },
    ],
  },
  {
    id: 4,
    sectionName: "Produkty Standardowe",
    subsections: [
      {
        id: 4,
        name: "Przeglądaj",
        ref: "/standard-products/manage",
      },
      {
        id: 5,
        name: "Dodaj",
        ref: "/standard-products/create",
      },
      {
        id: 6,
        name: "Do wykonania",
        ref: "/standard-products/missing",
      },
      {
        id: 7,
        name: "Kategorie produktów",
        ref: "/standard-products/category",
      },
    ],
  },
  {
    id: 5,
    sectionName: "Produkty Na Zamówienie",
    subsections: [
      {
        id: 8,
        name: "Do wykonania",
        ref: "/custom-products/ordered/production-manager",
      },
      {
        id: 9,
        name: "W realizacji",
        ref: "/custom-products/in-production",
      },
      {
        id: 10,
        name: "Historia",
        ref: "/custom-products/history/production-manager",
      },
    ],
  },
];
const ProductionManagerNavMenu = () => {
  return (
    <>
      <NavMenu options={options} />
    </>
  );
};

export default ProductionManagerNavMenu;
