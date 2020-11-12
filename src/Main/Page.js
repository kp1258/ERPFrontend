import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import {
  AdminHomePage,
  HomePage,
  ProductionManagerHomePage,
  SalesmanHomePage,
  TechnologistHomePage,
  WarehousemanHomePage,
} from "../Pages/HomePages";
import { UsersPage, CreateUserPage, UsersAdminPage } from "../Pages/Users";
import {
  CreateClientPage,
  ClientsPage,
  ClientsSalesmanPage,
} from "../Pages/Clients";
import {
  ActiveOrdersAdminPage,
  ActiveOrdersSalesmanPage,
  CreateOrderPage,
  OrdersHistoryAdminPage,
  OrdersHistorySalesmanPage,
  OrdersHistoryWarehousemanPage,
  OrdersInRealizationWarehousemanPage,
  OrdersToRealizeWarehousemanPage,
} from "../Pages/Orders";
import {
  ChangeStockMaterialWarehousePage,
  ChangeStockProductWarehousePage,
  ShowMaterialWarehousePage,
  ShowProductWarehousePage,
} from "../Pages/Warehouse";
import {
  CreateStandardProductPage,
  MissingStandardProductsPage,
  StandardProductsManagerPage,
  StandardProductsPage,
  StandardProductCategoriesPage,
} from "../Pages/StandardProducts";
import {
  CustomProductsHistoryManagerPage,
  CustomProductsHistorySalesmanPage,
  CustomProductsHistoryTechnologistPage,
  CustomProductsHistoryWarehousemanPage,
  CustomProductsInPreparationPage,
  CustomProductsInProductionPage,
  CustomProductsOrderedManagerPage,
  CustomProductsOrderedTechnologistPage,
  CustomProductsSalesmanPage,
  CustomProductsTechnologistPage,
  CustomProductsWarehousemanPage,
} from "../Pages/CustomProducts";
import { MaterialsPage, CreateMaterialPage } from "../Pages/Materials";
import {
  NotFoundPage,
  SignInPage,
  UnauthorizedPage,
  ChangePasswordPage,
} from "../Pages/Others";
import { UserContext } from "../Contexts/UserContext";
import { SecuredRoute } from "../Components/Routes";

const Page = () => {
  const user = useContext(UserContext);
  return (
    <div style={{ height: "100%" }}>
      <Switch>
        {/* Home pages */}
        <Route exact path="/" component={HomePage} />
        <SecuredRoute
          path="/admin"
          component={AdminHomePage}
          user={user}
          permitedRoles={["Administrator"]}
        />
        <SecuredRoute
          path="/salesman"
          component={SalesmanHomePage}
          user={user}
          permitedRoles={["Handlowiec"]}
        />
        <SecuredRoute
          path="/production-manager"
          component={ProductionManagerHomePage}
          user={user}
          permitedRoles={["Kierownik produkcji"]}
        />
        <SecuredRoute
          path="/warehouseman"
          component={WarehousemanHomePage}
          user={user}
          permitedRoles={["Magazynier"]}
        />
        <SecuredRoute
          path="/technologist"
          component={TechnologistHomePage}
          user={user}
          permitedRoles={["Technolog"]}
        />

        {/* Users pages */}
        <SecuredRoute
          exact
          path="/users"
          component={UsersPage}
          user={user}
          permitedRoles={[
            "Kierownik produkcji",
            "Technolog",
            "Magazynier",
            "Handlowiec",
          ]}
        />
        <SecuredRoute
          path="/users/admin"
          component={UsersAdminPage}
          user={user}
          permitedRoles={["Administrator"]}
        />
        <SecuredRoute
          path="/users/create"
          component={CreateUserPage}
          user={user}
          permitedRoles={["Administrator"]}
        />

        {/* Clients pages */}
        <SecuredRoute
          exact
          path="/clients"
          component={ClientsPage}
          user={user}
          permitedRoles={["Administrator"]}
        />
        <SecuredRoute
          path="/clients/salesman"
          component={ClientsSalesmanPage}
          user={user}
          permitedRoles={["Handlowiec"]}
        />
        <SecuredRoute
          path="/clients/create"
          component={CreateClientPage}
          user={user}
          permitedRoles={["Handlowiec"]}
        />

        {/* Orders pages */}
        <SecuredRoute
          path="/orders/active/admin"
          component={ActiveOrdersAdminPage}
          user={user}
          permitedRoles={["Administrator"]}
        />
        <SecuredRoute
          path="/orders/active/salesman"
          component={ActiveOrdersSalesmanPage}
          user={user}
          permitedRoles={["Handlowiec"]}
        />
        <SecuredRoute
          path="/orders/create"
          component={CreateOrderPage}
          user={user}
          permitedRoles={["Handlowiec"]}
        />
        <SecuredRoute
          path="/orders/history/admin"
          component={OrdersHistoryAdminPage}
          user={user}
          permitedRoles={["Administrator"]}
        />
        <SecuredRoute
          path="/orders/history/salesman"
          component={OrdersHistorySalesmanPage}
          user={user}
          permitedRoles={["Handlowiec"]}
        />
        <SecuredRoute
          path="/orders/history/warehouseman"
          component={OrdersHistoryWarehousemanPage}
          user={user}
          permitedRoles={["Magazynier"]}
        />
        <SecuredRoute
          path="/orders/in-realization"
          component={OrdersInRealizationWarehousemanPage}
          user={user}
          permitedRoles={["Magazynier"]}
        />
        <SecuredRoute
          path="/orders/to-realize"
          component={OrdersToRealizeWarehousemanPage}
          user={user}
          permitedRoles={["Magazynier"]}
        />

        {/* Product warehouse pages */}
        <SecuredRoute
          exact
          path="/warehouse/products"
          component={ShowProductWarehousePage}
          user={user}
          permitedRoles={[
            "Handlowiec",
            "Administrator",
            "Kierownik produkcji",
            "Technolog",
          ]}
        />
        <SecuredRoute
          path="/warehouse/products/change-stock"
          component={ChangeStockProductWarehousePage}
          user={user}
          permitedRoles={["Magazynier"]}
        />

        {/* Material warehouse pages */}
        <SecuredRoute
          exact
          path="/warehouse/materials"
          component={ShowMaterialWarehousePage}
          user={user}
          permitedRoles={[
            "Handlowiec",
            "Administrator",
            "Kierownik produkcji",
            "Technolog",
          ]}
        />
        <SecuredRoute
          path="/warehouse/materials/change-stock"
          component={ChangeStockMaterialWarehousePage}
          user={user}
          permitedRoles={["Magazynier"]}
        />

        {/* Standard products pages */}
        <SecuredRoute
          exact
          path="/standard-products"
          component={StandardProductsPage}
          user={user}
          permitedRoles={["Handlowiec", "Technolog"]}
        />
        <SecuredRoute
          path="/standard-products/manage"
          component={StandardProductsManagerPage}
          user={user}
          permitedRoles={["Kierownik produkcji", "Administrator"]}
        />
        <SecuredRoute
          path="/standard-products/create"
          component={CreateStandardProductPage}
          user={user}
          permitedRoles={["Kierownik produkcji", "Administrator"]}
        />
        <SecuredRoute
          path="/standard-products/missing"
          component={MissingStandardProductsPage}
          user={user}
          permitedRoles={["Kierownik produkcji"]}
        />
        <SecuredRoute
          path="/standard-products/category"
          component={StandardProductCategoriesPage}
          user={user}
          permitedRoles={["Kierownik produkcji", "Administrator"]}
        />

        {/* Custom products pages */}
        <SecuredRoute
          path="/custom-products/history/production-manager"
          component={CustomProductsHistoryManagerPage}
          user={user}
          permitedRoles={["Kierownik produkcji"]}
        />
        <SecuredRoute
          path="/custom-products/history/salesman"
          component={CustomProductsHistorySalesmanPage}
          user={user}
          permitedRoles={["Handlowiec"]}
        />
        <SecuredRoute
          path="/custom-products/history/technologist"
          component={CustomProductsHistoryTechnologistPage}
          user={user}
          permitedRoles={["Technolog"]}
        />
        <SecuredRoute
          path="/custom-products/history/warehouseman"
          component={CustomProductsHistoryWarehousemanPage}
          user={user}
          permitedRoles={["Magazynier"]}
        />
        <SecuredRoute
          path="/custom-products/in-preparation"
          component={CustomProductsInPreparationPage}
          user={user}
          permitedRoles={["Technolog"]}
        />
        <SecuredRoute
          path="/custom-products/in-production"
          component={CustomProductsInProductionPage}
          user={user}
          permitedRoles={["Kierownik produkcji"]}
        />
        <SecuredRoute
          path="/custom-products/ordered/production-manager"
          component={CustomProductsOrderedManagerPage}
          user={user}
          permitedRoles={["Kierownik produkcji"]}
        />
        <SecuredRoute
          path="/custom-products/ordered/technologist"
          component={CustomProductsOrderedTechnologistPage}
          user={user}
          permitedRoles={["Technolog"]}
        />
        <SecuredRoute
          path="/custom-products/salesman"
          component={CustomProductsSalesmanPage}
          user={user}
          permitedRoles={["Handlowiec"]}
        />
        <SecuredRoute
          path="/custom-products/technologist"
          component={CustomProductsTechnologistPage}
          user={user}
          permitedRoles={["Technolog"]}
        />
        <SecuredRoute
          path="/custom-products/warehouseman"
          component={CustomProductsWarehousemanPage}
          user={user}
          permitedRoles={["Magazynier"]}
        />
        {/* Material Pages */}
        <SecuredRoute
          exact
          path="/materials"
          component={MaterialsPage}
          user={user}
          permitedRoles={["Magazynier", "Administrator"]}
        />
        <SecuredRoute
          path="/materials/create"
          component={CreateMaterialPage}
          user={user}
          permitedRoles={["Magazynier", "Administrator"]}
        />
        {/* Other pages */}
        <SecuredRoute
          path="/change-password"
          component={ChangePasswordPage}
          user={user}
          permitedRoles={[
            "Administrator",
            "Handlowiec",
            "Kierownik produkcji",
            "Magazynier",
            "Technolog",
          ]}
        />
        <SecuredRoute
          path="/sign-in"
          component={SignInPage}
          user={user}
          permitedRoles={["anonymous"]}
        />
        <Route path="/unauthorized" component={UnauthorizedPage} />
        <Route path="/not-found" component={NotFoundPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
};

export default Page;
