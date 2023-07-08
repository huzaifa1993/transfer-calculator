import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { Container } from "@mui/system";

function CurrencyDisplay({ poundAmount }) {
  const dollarAmount = poundAmount * 1.24;

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
          label="$"
          id="outlined-size-small"
          defaultValue="large"
          size="small"
          type="number"
          value={dollarAmount}
        ></TextField>
      </Box>
    </Container>
  );
}

export default CurrencyDisplay;
