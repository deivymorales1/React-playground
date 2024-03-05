import React from "react";
import {
  Routes,
  Route,
  NavLink,
  BrowserRouter,
  Navigate,
} from "react-router-dom";
import Inicio from "../components/Inicio";
import Articulo from "../components/Contacto";
import Contacto from "../components/Articulos";
import Error from "../components/Error";
import Persona from "../components/Persona";
import PanelControl from "../components/PanelControl";
import InicioPanel from "../components/panel/Inicio";
import Crear from "../components/panel/Crear";
import Gestion from "../components/panel/Gestion";
import Acerca from "../components/panel/Acerca";

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
          <li>
            <NavLink
              to="/panel"
              className={({ isActive }) => (isActive ? "activado" : "")}
            >
              Panel de Control
            </NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/articulos" element={<Articulo />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/persona/:nombre?/:apellido?" element={<Persona />} />
        <Route
          path="/redirigir"
          element={<Navigate to={"/persona/deivy/rocha"} />}
        />
        {/* Subcomponente */}
        <Route path="/panel/*" element={<PanelControl />}>
          <Route index element={<InicioPanel />}></Route>
          <Route path="inicio" element={<InicioPanel />}></Route>
          <Route path="crear-articulos" element={<Crear />}></Route>
          <Route path="gestion-usuarios" element={<Gestion />}></Route>
          <Route path="acerca-de" element={<Acerca />}></Route>
        </Route>
        <Route
          path="*" // Cualquier cosa
          element={<Error />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterPrincipal;
