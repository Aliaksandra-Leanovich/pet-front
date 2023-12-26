import React from "react";
import { Route, Routes } from "react-router-dom";
import { MainTemplate } from "../components/MainTemplate";
import { Home } from "../pages/Home";
import { routes } from "../routes";
import { PrivateRoute } from "../utils";
import { About } from "../pages/About";
import { Blog } from "../pages/Blog";
import { Account } from "../pages/Account";
import { ProductDetails } from "../pages/Product";
import { Cart } from "../pages/Cart";
import { Catalog } from "../pages/Catalog";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={routes.HOME} element={<MainTemplate />}>
        <Route index element={<Home />} />
        <Route path={routes.ABOUT} element={<About />} />
        <Route path={routes.BLOG} element={<Blog />} />
        <Route path={routes.ACCOUNT} element={<Account />} />
        <Route path={routes.CATALOG} element={<Catalog />} />
        <Route
          path={routes.PRODUCTDETAILS}
          element={<ProductDetails />}
        ></Route>

        <Route element={<PrivateRoute />}>
          <Route path={routes.CART} element={<Cart />} />
        </Route>
      </Route>
    </Routes>
  );
};
