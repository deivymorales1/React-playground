import logo from "./logo.svg";
import "./App.css";
import MiFormulario from "./components/MiFormulario";
//import { PruebasCustom } from "./components/PruebasCustom";
//import { MiComponente } from "../src/components/MiComponente";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MiFormulario />
      </header>
    </div>
  );
}

export default App;
