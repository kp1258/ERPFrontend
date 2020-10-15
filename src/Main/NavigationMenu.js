import React from "react";
import {
  AdministratorNavMenu,
  SalesmanNavMenu,
  TechnologistNavMenu,
  ProductionManagerNavMenu,
  WarehousemanNavMenu,
} from "../Navigation";

const NavigationMenu = () => {
  return (
    <>
      <AdministratorNavMenu />
      <SalesmanNavMenu />
      <TechnologistNavMenu />
      <ProductionManagerNavMenu />
      <WarehousemanNavMenu />
    </>
  );
};

export default NavigationMenu;
