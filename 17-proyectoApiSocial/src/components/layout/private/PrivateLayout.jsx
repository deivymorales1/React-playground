import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

export const PrivateLayout = () => {
  return (
    <>
      {/* Layout */}

      {/* Cabecera y navegacion */}
      <Header />

      {/* Contenidos principal */}
      <section className="layout__content">
        <Outlet />
      </section>

      {/* Barra lateral */}
      <Sidebar />
    </>
  );
};
