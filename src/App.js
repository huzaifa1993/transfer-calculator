import CurrencyConverter from "./components/CurrencyConverter";
import Navbar from "./components/Navbar";
import ExchangeRate from "./components/ExchangeRate";
import MyMuInput from "./components/MuiInput";
import BasicRating from "./components/Rating";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ExchangeRate />
      <CurrencyConverter />
      <MyMuInput />
      <BasicRating />
    </div>
  );
}

export default App;
