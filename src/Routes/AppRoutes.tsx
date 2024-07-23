import React, { Suspense } from "react";
import AppBackdrop from "../Components/Appdrop/AppBackdrop";
import { Route, Routes } from "react-router-dom";
import { paths } from "./paths";
import Products from "../Components/products/products";
import MainLayout from "../Components/Layout/MainLayout";

const AppRoutes: React.FC = () => {
  return (
    <Suspense fallback={<AppBackdrop show />}>
      <Routes>
      
      
        <Route id="Dashboard" path={paths.DASHBOARD} element={<MainLayout/>} >

        <Route id="Products" path={paths.PRODUCTS} element={
            <div>
                <Products />
            </div>}>
            <Route id="Shop" path={paths.SHOP} element={<div>hi</div>} />

        </Route>
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
