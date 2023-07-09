import Input from "./input.jsx/Input";

function LiraDisplay({ poundAmount, currencyRate }) {
  const liraAmount = (poundAmount * currencyRate.TRY).toFixed(2);
  return <Input value={liraAmount} currencyIcon="tl" />;
}

export default LiraDisplay;
