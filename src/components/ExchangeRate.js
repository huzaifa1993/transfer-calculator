import React from "react";
import { Container } from "@mui/material";
import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const ExchangeRate = () => {
  const freecurrencyapi = new Freecurrencyapi('q126aomExY73iLvYfSHK5ychNPkbohrkaiOb3jdP');
  freecurrencyapi.latest({
    base_currency: 'GBP',
    currencies: 'USD'
}).then(response => {
    console.log(response);
});

  return (
    <Container>
      <h3 style={{ marginTop: "50px" }}>1 British Pound = 1.24 US Dollar</h3>
    </Container>
  );
};

export default ExchangeRate;
