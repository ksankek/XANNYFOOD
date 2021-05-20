import Admin from "./pages/Admin";
import Basket from "./pages/Basket";
import Shop from "./pages/Shop";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductList from "./components/ProductList";
import MainPage from "./pages/Main";
import {
  ADMIN_ROUTE,
  BASKET_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
  MAIN_ROUTE,
  PIZZA_ROUTE,
  SALADS_ROUTE,
  HAMBURGERS_ROUTE,
  DRINKS_ROUTE,
} from "./utils/Const";

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin,
  },

  {
    path: BASKET_ROUTE,
    Component: Basket,
  },
];

export const publicRoutes = [
  {
    path: MAIN_ROUTE,
    Component: MainPage,
  },

  {
    path: SHOP_ROUTE,
    Component: Shop,
  },

  {
    path: LOGIN_ROUTE,
    Component: Login,
  },

  {
    path: REGISTRATION_ROUTE,
    Component: Register,
  },

  {
    path: PIZZA_ROUTE,
    Component: ProductList,
  },

  {
    path: SALADS_ROUTE,
    Component: ProductList,
  },

  {
    path: HAMBURGERS_ROUTE,
    Component: ProductList,
  },

  {
    path: DRINKS_ROUTE,
    Component: ProductList,
  },
];
