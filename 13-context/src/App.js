import { useEffect, useState } from "react";
import "./App.css";
import { PruebaContext } from "./context/PruebaContext";
import { AppRouter } from "./routing/AppRouter";

function App() {
  const [usuario, setUsuario] = useState({});

  useEffect(() => {
    console.log("Solo una vez el useEffect");
    // La primera vez que se carga el componente
    let usuario_local = JSON.parse(localStorage.getItem("usuario"));
    setUsuario(usuario_local);
  }, []);

  useEffect(() => {
    console.log("Cambio en usuario");
    // Cada vez que se actualiza el estado se guarda en el LS
    localStorage.setItem("usuario", JSON.stringify(usuario));
  }, [usuario]);

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
