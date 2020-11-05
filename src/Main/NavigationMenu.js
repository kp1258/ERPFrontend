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
  if (user.role === "administrator") {
    return <AdministratorNavMenu />;
  } else if (user.role === "handlowiec") {
    return <SalesmanNavMenu />;
  } else if (user.role === "technolog") {
    return <TechnologistNavMenu />;
  } else if (user.role === "kierownik produkcji") {
    return <ProductionManagerNavMenu />;
  } else if (user.role === "magazynier") {
    return <WarehousemanNavMenu />;
  } else {
    return <div style={{ backgroundColor: "white", height: "100%" }}></div>;
  }
};

export default NavigationMenu;
