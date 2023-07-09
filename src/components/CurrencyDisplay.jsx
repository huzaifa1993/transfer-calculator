import Input from "./input";

function CurrencyDisplay({ poundAmount, currencyRate }) {
  const dollarAmount = (poundAmount * (1 / currencyRate.GBP)).toFixed(2);

  return <Input value={dollarAmount} currencyIcon="$"  helperText="Dollar"/>;
}

export default CurrencyDisplay;
