import React from "react";
import "./index.css";
import {
  AdministratorNavMenu,
  SalesmanNavMenu,
  TechnologistNavMenu,
  ProductionManagerNavMenu,
  WarehousemanNavMenu,
} from "../Navigation";

const NavigationMenu = () => {
  return (
    <div>
      <AdministratorNavMenu />
      <SalesmanNavMenu />
      <TechnologistNavMenu />
      <ProductionManagerNavMenu />
      <WarehousemanNavMenu />
    </div>
  );
};

export default NavigationMenu;
