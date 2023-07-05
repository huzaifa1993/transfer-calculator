import React, { useState } from 'react';
import Input from './Input';
import CurrencyDisplay from './CurrencyDisplay';

function CurrencyConverter() {
  const [poundAmount, setPoundAmount] = useState(0);

  function handlePoundAmountChange(event) {
    setPoundAmount(event.target.value);
  }

  return (
    <div>
      <Input value={poundAmount} onChange={handlePoundAmountChange} />
      <CurrencyDisplay poundAmount={poundAmount} />
    </div>
  );
}

export default CurrencyConverter;
