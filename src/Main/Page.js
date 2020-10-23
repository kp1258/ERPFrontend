import React from "react";
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
  CustomProductsInPreparationPage,
  CustomProductsInProductionPage,
  CustomProductsOrderedManagerPage,
  CustomProductsOrderedTechnologistPage,
  CustomProductsSalesmanPage,
  CustomProductsTechnologistPage,
} from "../Pages/CustomProducts";
import { MaterialsPage, CreateMaterialPage } from "../Pages/Materials";
import { NotFoundPage, SignInPage, UnauthorizedPage } from "../Pages/Others";
import "./index.css";
const Page = () => {
  return (
    <div className="page">
      <Switch>
        {/* Home pages */}
        <Route exact path="/" component={HomePage} />
        <Route path="/admin" component={AdminHomePage} />
        <Route path="/salesman" component={SalesmanHomePage} />
        <Route
          path="/production-manager"
          component={ProductionManagerHomePage}
        />
        <Route path="/warehouseman" component={WarehousemanHomePage} />
        <Route path="/technologist" component={TechnologistHomePage} />

        {/* Users pages */}
        <Route exact path="/users" component={UsersPage} />
        <Route path="/users/admin" component={UsersAdminPage} />
        <Route path="/users/create" component={CreateUserPage} />

        {/* Clients pages */}
        <Route exact path="/clients" component={ClientsPage} />
        <Route path="/clients/salesman" component={ClientsSalesmanPage} />
        <Route path="/clients/create" component={CreateClientPage} />

        {/* Orders pages */}
        <Route path="/orders/active/admin" component={ActiveOrdersAdminPage} />
        <Route
          path="/orders/active/salesman"
          component={ActiveOrdersSalesmanPage}
        />
        <Route path="/orders/create" component={CreateOrderPage} />
        <Route
          path="/orders/history/admin"
          component={OrdersHistoryAdminPage}
        />
        <Route
          path="/orders/history/salesman"
          component={OrdersHistorySalesmanPage}
        />
        <Route
          path="/orders/history/warehouseman"
          component={OrdersHistoryWarehousemanPage}
        />
        <Route
          path="/orders/in-realization"
          component={OrdersInRealizationWarehousemanPage}
        />
        <Route
          path="/orders/to-realize"
          component={OrdersToRealizeWarehousemanPage}
        />

        {/* Product warehouse pages */}
        <Route
          exact
          path="/warehouse/products"
          component={ShowProductWarehousePage}
        />
        <Route
          path="/warehouse/products/change-stock"
          component={ChangeStockProductWarehousePage}
        />

        {/* Material warehouse pages */}
        <Route
          exact
          path="/warehouse/materials"
          component={ShowMaterialWarehousePage}
        />
        <Route
          path="/warehouse/materials/change-stock"
          component={ChangeStockMaterialWarehousePage}
        />

        {/* Standard products pages */}
        <Route
          exact
          path="/standard-products"
          component={StandardProductsPage}
        />
        <Route
          path="/standard-products/manage"
          component={StandardProductsManagerPage}
        />
        <Route
          path="/standard-products/create"
          component={CreateStandardProductPage}
        />
        <Route
          path="/standard-products/missing"
          component={MissingStandardProductsPage}
        />
        <Route
          path="/standard-products/category"
          component={StandardProductCategoriesPage}
        />

        {/* Custom products pages */}
        <Route
          path="/custom-products/history/production-manager"
          component={CustomProductsHistoryManagerPage}
        />
        <Route
          path="/custom-products/history/salesman"
          component={CustomProductsHistorySalesmanPage}
        />
        <Route
          path="/custom-products/history/technologist"
          component={CustomProductsHistoryTechnologistPage}
        />
        <Route
          path="/custom-products/in-preparation"
          component={CustomProductsInPreparationPage}
        />
        <Route
          path="/custom-products/in-production"
          component={CustomProductsInProductionPage}
        />
        <Route
          path="/custom-products/ordered/production-manager"
          component={CustomProductsOrderedManagerPage}
        />
        <Route
          path="/custom-products/ordered/technologist"
          component={CustomProductsOrderedTechnologistPage}
        />
        <Route
          path="/custom-products/salesman"
          component={CustomProductsSalesmanPage}
        />
        <Route
          path="/custom-products/technologist"
          component={CustomProductsTechnologistPage}
        />
        {/* Material Pages */}
        <Route exact path="/materials" component={MaterialsPage} />
        <Route path="/materials/create" component={CreateMaterialPage} />
        {/* Other pages */}
        <Route path="/signin" component={SignInPage} />
        <Route path="/unauthorized" component={UnauthorizedPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
};

export default Page;
