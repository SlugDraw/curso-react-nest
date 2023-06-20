import Controlado from "./components/Controlado";
import NoControlado from "./components/NoControlado";

const App = () => {
  /**
   * <h2 className="h2">Formulario NO Controlado</h2>
      <NoControlado /-->
   */
  return (
    <>
      <h2 className="h2">Formulario Controlado</h2>
      <Controlado />
    </>
  );
}


export default App;