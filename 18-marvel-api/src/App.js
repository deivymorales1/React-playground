import React, { useEffect, useState } from "react";
import "./assets/css/App.css";
import { Routing } from "./router/Routing";
import { NavBar } from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* cargando toda la configuracion de rutas */}
        <NavBar />
        <Routing />
      </header>
    </div>
  );
}

export default App;
