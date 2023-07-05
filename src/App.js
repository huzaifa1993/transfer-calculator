import CurrencyConverter from "./components/CurrencyConverter";
import Navbar from "./components/Navbar";
import ExgancheRate from "./ExgancheRate";

function App() {
  return (
    <div className="App">
       <Navbar />
       <ExgancheRate />
       <CurrencyConverter />
    </div>
  );
}

export default App;
