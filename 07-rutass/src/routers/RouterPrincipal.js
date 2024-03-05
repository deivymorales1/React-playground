import React from "react";
import { Routes, Route, NavLink, BrowserRouter } from "react-router-dom";
import Inicio from "../components/Inicio";
import Articulo from "../components/Contacto";
import Contacto from "../components/Articulos";
import Error from "../components/Error";

const RouterPrincipal = () => {
  return (
    <BrowserRouter>
      {/* Cargar componentes */}
      {/* Aqui se carga el componente que coincide con el path */}

      <nav>
        <ul>
          <li>
            <NavLink
              to="/inicio"
              className={({ isActive }) => (isActive ? "activado" : "")}
            >
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/articulos"
              className={({ isActive }) => (isActive ? "activado" : "")}
            >
              Articulo
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contacto"
              className={({ isActive }) => (isActive ? "activado" : "")}
            >
              Contacto
            </NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/articulos" element={<Articulo />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route
          path="*" // Cualquier cosa
          element={<Error />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterPrincipal;
