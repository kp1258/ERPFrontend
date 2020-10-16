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
import {
  ShowUsersPage,
  CreateUserPage,
  ShowUsersAdminPage,
  EditUserPage,
} from "../Pages/Users";
import {
  OrdersDetailsPage,
  ShowOrdersPage,
  ShowSalesmanOrdersPage,
} from "../Pages/Orders";
import {
  CreateStandardProductPage,
  EditStandardProductPage,
  ShowStandardProductsPage,
  StandardProductCategoryPage,
} from "../Pages/StandardProducts";
import {
  ShowCustomProductsPage,
  TechnologistsCustomProductsPage,
} from "../Pages/CustomProducts";
import {
  ShowMaterialWarehousePage,
  ShowProductWarehousePage,
} from "../Pages/Warehouse";
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
          path="/production_manager"
          component={ProductionManagerHomePage}
        />
        <Route path="/warehouseman" component={WarehousemanHomePage} />
        <Route path="/technologist" component={TechnologistHomePage} />

        {/* Users pages */}
        <Route exact path="/users" component={ShowUsersPage} />
        <Route path="/users/admin" component={ShowUsersAdminPage} />
        <Route path="/users/edit" component={EditUserPage} />
        <Route path="/users/create" component={CreateUserPage} />

        {/* Orders pages */}
        <Route exact path="/orders" component={ShowOrdersPage} />
        <Route path="/orders/salesman" component={ShowSalesmanOrdersPage} />
        <Route path="/orders/details" component={OrdersDetailsPage} />

        {/* Standard products pages */}
        <Route
          exact
          path="/standard_products"
          component={ShowStandardProductsPage}
        />
        <Route
          path="/standard_products/edit"
          component={EditStandardProductPage}
        />
        <Route
          path="/standard_products/create"
          component={CreateStandardProductPage}
        />
        <Route
          path="/standard_products/category"
          component={StandardProductCategoryPage}
        />

        {/* Custom products pages */}
        <Route
          exact
          path="/custom_products"
          component={ShowCustomProductsPage}
        />
        <Route
          path="/custom_products/technologist"
          component={TechnologistsCustomProductsPage}
        />

        {/* Material warehouse pages */}
        <Route
          path="/warehouse/materials"
          component={ShowMaterialWarehousePage}
        />
        {/* Product warehouse pages */}
        <Route
          path="/warehouse/products"
          component={ShowProductWarehousePage}
        />

        {/* Other pages */}
        <Route path="/signin" component={SignInPage} />
        <Route path="/unauthorized" component={UnauthorizedPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
};

export default Page;
