import React, { Suspense } from "react";
import AppBackdrop from "../Components/Appdrop/AppBackdrop";
import { Route, Routes } from "react-router-dom";
import { paths } from "./paths";
import Products from "../Components/products/products";
import MainLayout from "../Components/Layout/MainLayout";
import Cart from "../Components/Cart/Cart";
import ProductList from "../Components/products/ProductList";
import Home from "../Components/Home/Home";

const AppRoutes: React.FC = () => {
  return (
    <Suspense fallback={<AppBackdrop show />}>
      <Routes>
        <Route id="Dashboard" path={paths.DASHBOARD} element={<MainLayout />}>
        <Route index element={<Home />} />
          <Route id="Products" path={paths.PRODUCTS} element={
            <div>
              <ProductList />
            </div>
          }>
            <Route id="Shop" path={paths.SHOP} element={<div>hi</div>} />
          </Route>
          <Route id="About" path={paths.ABOUT} element={<div>About</div>} />
          <Route id="contact" path={paths.CONTACT} element={<div>Contact</div>} />
          <Route id="cart" path='/cart' element={<Cart />} />
          {/* <Route id="productlist" path='/productlist' element={<ProductList />} /> */}
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
