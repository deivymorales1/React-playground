import logo from "./logo.svg";
import "./App.css";
//import MiFormulario from "./components/MiFormulario";
import { MiUsuario } from "./components/MiUsuario";
//import { PruebasCustom } from "./components/PruebasCustom";
//import { MiComponente } from "../src/components/MiComponente";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MiUsuario />
      </header>
    </div>
  );
}

export default App;
