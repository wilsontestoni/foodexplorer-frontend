import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { PlateDetails } from "../pages/PlateDetails";
import { Favorites } from "../pages/Favorites";
import { Checkout } from "../pages/Checkout";
import { OrderHistory } from "../pages/OrderHistory";

export function CustomerRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/plate/:id" element={<PlateDetails />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/order-history" element={<OrderHistory />} />
    </Routes>
  );
}
