import { useState } from "react";
import "./App.css";
import { PruebaContext } from "./context/PruebaContext";
import { AppRouter } from "./routing/AppRouter";

function App() {
  const [usuario, setUsuario] = useState({});

  const curso = {
    id: 1,
    titulo: "Master en JavaScript",
    contenido: "Muchas horas de contenido",
  };

  return (
    <div className="App">
      <h1>Aprendiendo el useContext</h1>

      <PruebaContext.Provider
        value={{
          usuario,
          setUsuario,
        }}
      >
        <AppRouter />
      </PruebaContext.Provider>
    </div>
  );
}

export default App;
