import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { NewPlate } from "../pages/NewPlate";
import { EditPlate } from "../pages/EditPlate";
import { PlateDetails } from "../pages/PlateDetails";
import { OrderHistory } from "../pages/OrderHistory";

export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/newplate" element={<NewPlate />} />
      <Route path="/editplate/:id" element={<EditPlate />} />
      <Route path="/plate/:id" element={<PlateDetails />} />
      <Route path="/order-history" element={<OrderHistory />} />

    </Routes>
  );
}
