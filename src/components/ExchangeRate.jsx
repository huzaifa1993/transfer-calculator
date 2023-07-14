import { Container } from "@mui/material";

const ExchangeRate = ({ currencyRate }) => {
  return (
    <Container>
      <h3 style={{ marginTop: "50px" }}>
        1 £ = {currencyRate.GBP && (1 / currencyRate.GBP).toFixed(2)} US Dollar
      </h3>

      <h3 style={{ marginTop: "50px" }}>
        1 $ = {currencyRate.TRY && (currencyRate.TRY).toFixed(2)} Turkish Lira
      </h3>
    </Container>
  );
};

export default ExchangeRate;
