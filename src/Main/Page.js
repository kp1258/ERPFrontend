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
import { NotFoundPage, SignInPage, UnauthorizedPage } from "../Pages/Others";
import { UserContext } from "../Contexts/UserContext";
import { SecuredRoute } from "../Components/Routes";
const Page = () => {
  const user = useContext(UserContext);
  return (
    <div>
      <Switch>
        {/* Home pages */}
        <Route exact path="/" component={HomePage} />
        <SecuredRoute
          path="/admin"
          component={AdminHomePage}
          user={user}
          permitedRoles={["administrator"]}
        />
        <SecuredRoute
          path="/salesman"
          component={SalesmanHomePage}
          user={user}
          permitedRoles={["handlowiec"]}
        />
        <SecuredRoute
          path="/production-manager"
          component={ProductionManagerHomePage}
          user={user}
          permitedRoles={["kierownik produkcji"]}
        />
        <SecuredRoute
          path="/warehouseman"
          component={WarehousemanHomePage}
          user={user}
          permitedRoles={["magazynier"]}
        />
        <SecuredRoute
          path="/technologist"
          component={TechnologistHomePage}
          user={user}
          permitedRoles={["technolog"]}
        />

        {/* Users pages */}
        <SecuredRoute
          exact
          path="/users"
          component={UsersPage}
          user={user}
          permitedRoles={[
            "kierownik produkcji",
            "technolog",
            "magazynier",
            "handlowiec",
          ]}
        />
        <SecuredRoute
          path="/users/admin"
          component={UsersAdminPage}
          user={user}
          permitedRoles={["administrator"]}
        />
        <SecuredRoute
          path="/users/create"
          component={CreateUserPage}
          user={user}
          permitedRoles={["administrator"]}
        />

        {/* Clients pages */}
        <SecuredRoute
          exact
          path="/clients"
          component={ClientsPage}
          user={user}
          permitedRoles={["administrator"]}
        />
        <SecuredRoute
          path="/clients/salesman"
          component={ClientsSalesmanPage}
          user={user}
          permitedRoles={["handlowiec"]}
        />
        <SecuredRoute
          path="/clients/create"
          component={CreateClientPage}
          user={user}
          permitedRoles={["handlowiec"]}
        />

        {/* Orders pages */}
        <SecuredRoute
          path="/orders/active/admin"
          component={ActiveOrdersAdminPage}
          user={user}
          permitedRoles={["administrator"]}
        />
        <SecuredRoute
          path="/orders/active/salesman"
          component={ActiveOrdersSalesmanPage}
          user={user}
          permitedRoles={["handlowiec"]}
        />
        <SecuredRoute
          path="/orders/create"
          component={CreateOrderPage}
          user={user}
          permitedRoles={["handlowiec"]}
        />
        <SecuredRoute
          path="/orders/history/admin"
          component={OrdersHistoryAdminPage}
          user={user}
          permitedRoles={["administrator"]}
        />
        <SecuredRoute
          path="/orders/history/salesman"
          component={OrdersHistorySalesmanPage}
          user={user}
          permitedRoles={["handlowiec"]}
        />
        <SecuredRoute
          path="/orders/history/warehouseman"
          component={OrdersHistoryWarehousemanPage}
          user={user}
          permitedRoles={["magazynier"]}
        />
        <SecuredRoute
          path="/orders/in-realization"
          component={OrdersInRealizationWarehousemanPage}
          user={user}
          permitedRoles={["magazynier"]}
        />
        <SecuredRoute
          path="/orders/to-realize"
          component={OrdersToRealizeWarehousemanPage}
          user={user}
          permitedRoles={["magazynier"]}
        />

        {/* Product warehouse pages */}
        <SecuredRoute
          exact
          path="/warehouse/products"
          component={ShowProductWarehousePage}
          user={user}
          permitedRoles={["handlowiec", "administrator", "kierownik produkcji"]}
        />
        <SecuredRoute
          path="/warehouse/products/change-stock"
          component={ChangeStockProductWarehousePage}
          user={user}
          permitedRoles={["magazynier"]}
        />

        {/* Material warehouse pages */}
        <SecuredRoute
          exact
          path="/warehouse/materials"
          component={ShowMaterialWarehousePage}
          user={user}
          permitedRoles={["handlowiec", "administrator", "kierownik produkcji"]}
        />
        <SecuredRoute
          path="/warehouse/materials/change-stock"
          component={ChangeStockMaterialWarehousePage}
          user={user}
          permitedRoles={["magazynier"]}
        />

        {/* Standard products pages */}
        <SecuredRoute
          exact
          path="/standard-products"
          component={StandardProductsPage}
          user={user}
          permitedRoles={["handlowiec", "technolog"]}
        />
        <SecuredRoute
          path="/standard-products/manage"
          component={StandardProductsManagerPage}
          user={user}
          permitedRoles={["kierownik produkcji", "administrator"]}
        />
        <SecuredRoute
          path="/standard-products/create"
          component={CreateStandardProductPage}
          user={user}
          permitedRoles={["kierownik produkcji"]}
        />
        <SecuredRoute
          path="/standard-products/missing"
          component={MissingStandardProductsPage}
          user={user}
          permitedRoles={["kierownik produkcji"]}
        />
        <SecuredRoute
          path="/standard-products/category"
          component={StandardProductCategoriesPage}
          user={user}
          permitedRoles={["kierownik produkcji"]}
        />

        {/* Custom products pages */}
        <SecuredRoute
          path="/custom-products/history/production-manager"
          component={CustomProductsHistoryManagerPage}
          user={user}
          permitedRoles={["kierownik produkcji"]}
        />
        <SecuredRoute
          path="/custom-products/history/salesman"
          component={CustomProductsHistorySalesmanPage}
          user={user}
          permitedRoles={["handlowiec"]}
        />
        <SecuredRoute
          path="/custom-products/history/technologist"
          component={CustomProductsHistoryTechnologistPage}
          user={user}
          permitedRoles={["technolog"]}
        />
        <SecuredRoute
          path="/custom-products/history/warehouseman"
          component={CustomProductsHistoryWarehousemanPage}
          user={user}
          permitedRoles={["magazynier"]}
        />
        <SecuredRoute
          path="/custom-products/in-preparation"
          component={CustomProductsInPreparationPage}
          user={user}
          permitedRoles={["technolog"]}
        />
        <SecuredRoute
          path="/custom-products/in-production"
          component={CustomProductsInProductionPage}
          user={user}
          permitedRoles={["kierownik produkcji"]}
        />
        <SecuredRoute
          path="/custom-products/ordered/production-manager"
          component={CustomProductsOrderedManagerPage}
          user={user}
          permitedRoles={["kierownik produkcji"]}
        />
        <SecuredRoute
          path="/custom-products/ordered/technologist"
          component={CustomProductsOrderedTechnologistPage}
          user={user}
          permitedRoles={["technolog"]}
        />
        <SecuredRoute
          path="/custom-products/salesman"
          component={CustomProductsSalesmanPage}
          user={user}
          permitedRoles={["handlowiec"]}
        />
        <SecuredRoute
          path="/custom-products/technologist"
          component={CustomProductsTechnologistPage}
          user={user}
          permitedRoles={["technolog"]}
        />
        <SecuredRoute
          path="/custom-products/warehouseman"
          component={CustomProductsWarehousemanPage}
          user={user}
          permitedRoles={["magazynier"]}
        />
        {/* Material Pages */}
        <SecuredRoute exact path="/materials" component={MaterialsPage} />
        <SecuredRoute path="/materials/create" component={CreateMaterialPage} />
        {/* Other pages */}
        <Route path="/signin" component={SignInPage} />
        <Route path="/unauthorized" component={UnauthorizedPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
};

export default Page;
