import React from "react";
import NavMenu from "./NavMenu";
import NavMenu2 from "./NavMenu2";

const options = [
  {
    id: 1,
    sectionName: "Pracownicy",
    subsections: [
      {
        id: 1,
        name: "Przeglądaj admin",
        ref: "/users/admin",
      },
      {
        id: 2,
        name: "Przeglądaj",
        ref: "/users",
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
    sectionName: "Zamówienia",
    subsections: [
      {
        id: 5,
        name: "Przeglądaj",
        ref: "/orders",
      },
      {
        id: 6,
        name: "Złóż zamówienie",
        ref: "/orders/place_order",
      },
      {
        //Salesman
        id: 7,
        name: "Moje zamówienia",
        ref: "/orders/my_orders",
      },
      {
        //Warehouseman
        id: 8,
        name: "Zrealizuj zamówienie",
        ref: "/orders/complete",
      },
    ],
  },
  {
    id: 3,
    sectionName: "Magazyn Materiałów",
    subsections: [
      {
        id: 10,
        name: "Przeglądaj",
        ref: "/warehouse/materials",
      },
      {
        //Warehouseman
        id: 11,
        name: "Zmień stan",
        ref: "/warehouse/materials/edit",
      },
      {
        id: 12,
        name: "Edytuj materiały",
        ref: "/materials/edit",
      },
    ],
  },
  {
    id: 4,
    sectionName: "Magazyn Produktów",
    subsections: [
      {
        id: 15,
        name: "Przeglądaj",
        ref: "/warehouse/products",
      },
      {
        //Warehouseman
        id: 16,
        name: "Zmień stan",
        ref: "/warehouse/products/edit",
      },
    ],
  },
  {
    id: 5,
    sectionName: "Produkty Standardowe",
    subsections: [
      {
        id: 20,
        name: "Przeglądaj",
        ref: "/standard_products",
      },
      {
        id: 21,
        name: "Dodaj",
        ref: "/standard_products/create",
      },
      {
        id: 22,
        name: "Edytuj",
        ref: "/standard_products/edit",
      },
      {
        id: 23,
        name: "Kategorie produktów",
        ref: "/standard_products/category",
      },
    ],
  },
  {
    id: 6,
    sectionName: "Produkty Na Zamówienie",
    subsections: [
      {
        id: 25,
        name: "Przeglądaj",
        ref: "/custom_products",
      },
      {
        //Technologist
        id: 26,
        name: "Dodaj rozwiązanie",
        ref: "/custom_products/solution",
      },
      {
        //Technologist
        id: 27,
        name: "Moje rozwiązania",
        ref: "/custom_products/my_solutions",
      },
      {
        //Production Manager
        id: 28,
        name: "Do wykonania",
        ref: "/custom_products/to_be_produced",
      },
    ],
  },
];

const AdministratorNavMenu = () => {
  return (
    <>
      <NavMenu2 options={options} />
    </>
  );
};

export default AdministratorNavMenu;
