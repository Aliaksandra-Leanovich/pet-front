import React from "react";
import { Route, Routes } from "react-router-dom";
import { MainTemplate } from "../components/MainTemplate";
import { Home } from "../pages/Home";
import { routes } from "../routes";
import { PrivateRoute } from "../utils";
import { About } from "../pages/About";
import { Blog } from "../pages/Blog";
import { Account } from "../pages/Account";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={routes.HOME} element={<MainTemplate />}>
        <Route index element={<Home />} />
        <Route path={routes.ABOUT} element={<About />} />
        <Route path={routes.BLOG} element={<Blog />} />
        <Route path={routes.ACCOUNT} element={<Account />} />
      </Route>

      {/* <Route element={<PrivateRoute />}>
        <Route path={routes.USERS} element={<Users />} />
      </Route> */}
    </Routes>
  );
};
