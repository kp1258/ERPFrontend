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
        ref: "/users/admin",
      },
      {
        id: 3,
        name: "Dodaj",
        ref: "/users/create",
      },
    ],
  },
  {
    id: 2,
    sectionName: "Klienci",
    subsections: [
      {
        id: 5,
        name: "Przeglądaj",
        ref: "/clients",
      },
    ],
  },
  {
    id: 3,
    sectionName: "Zamówienia",
    subsections: [
      {
        id: 51,
        name: "Aktywne zamówienia",
        ref: "/orders/active/admin",
      },
      {
        id: 52,
        name: "Historia",
        ref: "/orders/history/admin",
      },
    ],
  },
  {
    id: 4,
    sectionName: "Magazyn produktów",
    subsections: [
      {
        id: 15,
        name: "Przeglądaj",
        ref: "/warehouse/products",
      },
    ],
  },
  {
    id: 5,
    sectionName: "Magazyn materiałów",
    subsections: [
      {
        id: 20,
        name: "Przeglądaj",
        ref: "/warehouse/materials",
      },
    ],
  },
  {
    id: 6,
    sectionName: "Produkty standardowe",
    subsections: [
      {
        id: 26,
        name: "Przeglądaj",
        ref: "/standard-products/manage",
      },
      {
        id: 27,
        name: "Dodaj",
        ref: "/standard-products/create",
      },
      {
        id: 29,
        name: "Kategorie produktów",
        ref: "/standard-products/category",
      },
    ],
  },

  {
    id: 8,
    sectionName: "Materiały",
    subsections: [
      {
        id: 40,
        name: "Przeglądaj",
        ref: "/materials",
      },
      {
        id: 41,
        name: "Dodaj",
        ref: "/materials/create",
      },
    ],
  },
];
const AdministratorNavMenu = () => {
  return (
    <>
      <NavMenu options={options} />
    </>
  );
};

export default AdministratorNavMenu;
