import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Card } from "../components/Cards/Card";
import { Characters } from "../components/Pages/Characters";

export const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Card />} />

        <Route path="/caracters" element={<Characters />} />
      </Routes>
    </BrowserRouter>
  );
};
