import CurrencyConverter from "./components/CurrencyConverter";
import Navbar from "./components/Navbar";
import ExchangeRate from "./components/ExchangeRate";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ExchangeRate />
      <CurrencyConverter />
    </div>
  );
}

export default App;
