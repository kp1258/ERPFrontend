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
        name: "Przeglądaj (a)",
        ref: "/users/admin",
      },
      {
        id: 2,
        name: "Przeglądaj",
        ref: "/users",
      },
      {
        id: 3,
        name: "Dodaj (a)",
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
        name: "Przeglądaj (a)",
        ref: "/clients",
      },
      {
        id: 6,
        name: "Przeglądaj (h)",
        ref: "/clients/salesman",
      },
      {
        id: 7,
        name: "Dodaj (h)",
        ref: "/clients/create",
      },
    ],
  },
  {
    id: 3,
    sectionName: "Zamówienia",
    subsections: [
      {
        id: 10,
        name: "Aktywne zamówienia (h)",
        ref: "/orders/active/salesman",
      },
      {
        id: 11,
        name: "Historia (h)",
        ref: "/orders/history/salesman",
      },
      {
        id: 12,
        name: "Złóż zamówienie (h)",
        ref: "/orders/create",
      },
      {
        id: 13,
        name: "Do zrealizowania (m)",
        ref: "/orders/to-realize",
      },
      {
        id: 14,
        name: "W realizacji (m)",
        ref: "/orders/in-realization",
      },
      {
        id: 50,
        name: "Historia (m)",
        ref: "/orders/history/warehouseman",
      },
      {
        id: 51,
        name: "Aktywne zamówienia (a)",
        ref: "/orders/active/admin",
      },
      {
        id: 52,
        name: "Historia (a)",
        ref: "/orders/history/admin",
      },
    ],
  },
  {
    id: 4,
    sectionName: "Magazyn Produktów",
    subsections: [
      {
        id: 15,
        name: "Przeglądaj (h,kp,a)",
        ref: "/warehouse/products",
      },
      {
        id: 16,
        name: "Zmień stan (m)",
        ref: "/warehouse/products/change-stock",
      },
    ],
  },
  {
    id: 5,
    sectionName: "Magazyn Materiałów",
    subsections: [
      {
        id: 20,
        name: "Przeglądaj (kp, a)",
        ref: "/warehouse/materials",
      },
      {
        id: 21,
        name: "Zmień stan (m)",
        ref: "/warehouse/materials/change-stock",
      },
    ],
  },
  {
    id: 6,
    sectionName: "Produkty Standardowe",
    subsections: [
      {
        id: 25,
        name: "Przeglądaj katalog (h,t)",
        ref: "/standard-products",
      },
      {
        id: 26,
        name: "Przeglądaj (kP, a)",
        ref: "/standard-products/manage",
      },
      {
        id: 27,
        name: "Dodaj (kp)",
        ref: "/standard-products/create",
      },
      {
        id: 28,
        name: "Do wykonania (kp)",
        ref: "/standard-products/missing",
      },
      {
        id: 29,
        name: "Kategorie produktów",
        ref: "/standard-products/category",
      },
    ],
  },
  {
    id: 7,
    sectionName: "Produkty Na Zamówienie",
    subsections: [
      {
        id: 30,
        name: "Z moich zamówień (h)",
        ref: "/custom-products/salesman",
      },
      {
        id: 31,
        name: "Historia (h)",
        ref: "/custom-products/history/salesman",
      },
      {
        id: 32,
        name: "Do wykonania (kp)",
        ref: "/custom-products/ordered/production-manager",
      },
      {
        id: 33,
        name: "W realizacji (kp)",
        ref: "/custom-products/in-production",
      },
      {
        id: 34,
        name: "Historia (kp)",
        ref: "/custom-products/history/production-manager",
      },
      {
        id: 35,
        name: "Do wykonania (t)",
        ref: "/custom-products/ordered/technologist",
      },
      {
        id: 36,
        name: "W realizacji (t)",
        ref: "/custom-products/in-preparation",
      },
      {
        id: 37,
        name: "Moje rozwiązania (t)",
        ref: "/custom-products/technologist",
      },
      {
        id: 38,
        name: "Historia (t)",
        ref: "/custom-products/history/technologist",
      },
      {
        id: 39,
        name: "Historia (m)",
        ref: "/custom-products/history/warehouseman",
      },
      {
        id: 42,
        name: "W realizacji (m)",
        ref: "/custom-products/warehouseman",
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
      <NavMenu2 options={options} />
    </>
  );
};

export default AdministratorNavMenu;
