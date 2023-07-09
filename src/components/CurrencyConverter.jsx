import React, { useState } from "react";
import Input from "./input";
import CurrencyDisplay from "./CurrencyDisplay";
import LiraDisplay from "./liraDisplay";

function CurrencyConverter({ currencyRate }) {
  const [poundAmount, setPoundAmount] = useState(0);

  function handlePoundAmountChange(event) {
    setPoundAmount(event.target.value);
  }

  return (
    <div>
      <Input
        value={poundAmount}
        onChange={handlePoundAmountChange}
        currencyIcon="£"
        helperText="Pound"
      />
      <CurrencyDisplay poundAmount={poundAmount} currencyRate={currencyRate}  />
      <LiraDisplay poundAmount={poundAmount} currencyRate={currencyRate} />

    </div>
  );
}

export default CurrencyConverter;
