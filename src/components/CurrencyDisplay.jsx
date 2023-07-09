import Input from "./input.jsx/Input";

function CurrencyDisplay({ poundAmount, currencyRate }) {
  const dollarAmount = (poundAmount * (1 / currencyRate.GBP)).toFixed(2);

  return <Input value={dollarAmount} currencyIcon="$" />;
}

export default CurrencyDisplay;
