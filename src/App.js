import React,{useState, useEffect} from "react";
import CurrencyConverter from "./components/CurrencyConverter";
import Navbar from "./components/Navbar";
import ExchangeRate from "./components/ExchangeRate";


function App() {
  const apiUrl =
  "https://api.freecurrencyapi.com/v1/latest?apikey=q126aomExY73iLvYfSHK5ychNPkbohrkaiOb3jdP";


const [currencyRate, setCurrencyRate] = useState({
  GBP: null,
  USD: null,
  TRY: null
  
});
useEffect(() => {
  async function callApi() {
    await fetch(apiUrl)
      .then((response) => response.json())
      .then((result) => {console.log(result.data)
      setCurrencyRate({ GBP: result.data.GBP , USD: result.data.USD, TRY: result.data.TRY})
  });
  }
  callApi();
}, []);
  return (
    <div className="App">
      <Navbar />
      <ExchangeRate currencyRate={currencyRate}/>
      <CurrencyConverter currencyRate={currencyRate}/>
    </div>
  );
}

export default App;
