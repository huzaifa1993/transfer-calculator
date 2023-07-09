import "./input.css";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/system";

function Input({ value, onChange, currencyIcon }) {
  return (
    <Container>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          className="currency-input"
          value={value}
          onChange={onChange}
          label={currencyIcon}
          id="outlined-size-small"
          defaultValue="large"
          size="small"
          type="number"
        />
      </Box>
    </Container>
  );
}
export default Input;
