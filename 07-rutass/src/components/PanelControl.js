import React from "react";
import { Outlet, NavLink } from "react-router-dom";

const PanelControl = () => {
  return (
    <div>
      <h1>Pagina de panel de control</h1>
      <p>Elige una de estas opciones</p>
      <nav>
        <ul>
          <li>
            <NavLink to="/panel/inicio">Inicio</NavLink>
          </li>
          <li>
            <NavLink to="/panel/crear-articulos">Crear Articulos</NavLink>
          </li>
          <li>
            <NavLink to="/panel/gestion-usuarios">Gestion usuarios</NavLink>
          </li>
          <li>
            <NavLink to="/panel/acerca-de">Acerca de</NavLink>
          </li>
        </ul>
      </nav>

      <div>
        {/* Cargar aqui los  componentes de las subrutas anidada */}
        <Outlet />
      </div>
    </div>
  );
};

export default PanelControl;
