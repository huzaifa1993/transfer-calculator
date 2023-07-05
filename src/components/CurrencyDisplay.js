
function CurrencyDisplay({ poundAmount }) {
  const dollarAmount = poundAmount * 1.24; 

  return (
    <div>
      <h2 style={{marginLeft: "225px"}}>Pound: {poundAmount}</h2>
      <h2 style={{marginLeft: "225px"}}>Dollar: {dollarAmount}</h2>
    </div>
  );
}

export default CurrencyDisplay;
