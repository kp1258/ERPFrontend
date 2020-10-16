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
    <div className="navigationMenu">
      <AdministratorNavMenu />
      <SalesmanNavMenu />
      <TechnologistNavMenu />
      <ProductionManagerNavMenu />
      <WarehousemanNavMenu />
    </div>
  );
};

export default NavigationMenu;
