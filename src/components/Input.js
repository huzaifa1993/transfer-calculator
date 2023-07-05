// import { Container } from "@mui/material";
import "./input.css";

// function Input({ value, onChange }) {
//   return (
//     <Container>
//       <input
//         className="currency-input"
//         type="number"
//         value={value}
//         onChange={onChange}
//       />
//     </Container>
//   );
// }

// export default Input;
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function Input() {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          label="Pound"
          id="outlined-size-small"
          defaultValue="Small"
          size="small"
          type="number"
        />
      </div>
    </Box>
  );
}
export default Input;
