import Input from "./input";

function LiraDisplay({ poundAmount, currencyRate }) {
  const liraAmount = (poundAmount * currencyRate.TRY).toFixed(2);
  return <Input value={liraAmount} currencyIcon="tl" helperText="Turkish Lira" />;
}

export default LiraDisplay;
