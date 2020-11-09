import React, { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";
import "./index.css";
import {
  AdministratorNavMenu,
  SalesmanNavMenu,
  TechnologistNavMenu,
  ProductionManagerNavMenu,
  WarehousemanNavMenu,
} from "../Navigation";

const NavigationMenu = () => {
  const user = useContext(UserContext);
  if (user.role === "Administrator") {
    return <AdministratorNavMenu />;
  } else if (user.role === "Handlowiec") {
    return <SalesmanNavMenu />;
  } else if (user.role === "Technolog") {
    return <TechnologistNavMenu />;
  } else if (user.role === "Kierownik produkcji") {
    return <ProductionManagerNavMenu />;
  } else if (user.role === "Magazynier") {
    return <WarehousemanNavMenu />;
  } else {
    return <div style={{ backgroundColor: "#F0F2F5", height: "100%" }}></div>;
  }
};

export default NavigationMenu;
