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
    sectionName: "Magazyn produktów",
    subsections: [
      {
        id: 3,
        name: "Przeglądaj",
        ref: "/warehouse/products",
      },
    ],
  },
  {
    id: 3,
    sectionName: "Magazyn materiałów",
    subsections: [
      {
        id: 4,
        name: "Przeglądaj",
        ref: "/warehouse/materials",
      },
    ],
  },
  {
    id: 4,
    sectionName: "Produkty standardowe",
    subsections: [
      {
        id: 5,
        name: "Przeglądaj katalog",
        ref: "/standard-products",
      },
    ],
  },
  {
    id: 5,
    sectionName: "Produkty na zamówienie",
    subsections: [
      {
        id: 6,
        name: "Do wykonania",
        ref: "/custom-products/ordered/technologist",
      },
      {
        id: 7,
        name: "W realizacji",
        ref: "/custom-products/in-preparation",
      },
      {
        id: 8,
        name: "Moje rozwiązania",
        ref: "/custom-products/technologist",
      },
      {
        id: 9,
        name: "Historia",
        ref: "/custom-products/history/technologist",
      },
    ],
  },
];
const TechnologistNavMenu = () => {
  return (
    <>
      <NavMenu options={options} />
    </>
  );
};

export default TechnologistNavMenu;
