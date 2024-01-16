import Listado from "./Components/Listado";
import Buscador from "./Components/Buscador";
import Crear from "./Components/Crear";
import { useState } from "react";

function App() {
  const [listadoState, setListadoState] = useState([]);

  return (
    <>
      <div className="layout">
        {/* Cabecera */}
        <header className="header">
          <div className="logo">
            <div className="play"></div>
          </div>
          <h1> Mis Pelis </h1>
        </header>
        {/* Barra de navegacion*/}
        <nav className="nav">
          <ul>
            <li>
              <a href="">Inicio</a>
            </li>
            <li>
              <a href="">Peliculas</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">Contacto</a>
            </li>
          </ul>
        </nav>

        {/* Aqui va el listado de peliculas */}
        <section id="content" className="content">
          {/* aqui van las peliculas */}
          <Listado
            listadoState={listadoState}
            setListadoState={setListadoState}
          />
        </section>

        {/* Barra lateral*/}
        <aside className="lateral">
          <Buscador
            listadoState={listadoState}
            setListadoState={setListadoState}
          />

          <Crear setListadoState={setListadoState} />
        </aside>

        {/* Pie de pagina */}
        <footer className="footer">
          &copy; Master en JavaScript y TypeScript
        </footer>
      </div>
    </>
  );
}

export default App;
