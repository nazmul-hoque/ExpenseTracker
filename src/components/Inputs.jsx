import { Box, Button, TextField, Typography } from "@mui/material";
import "../styles.css";

const Inputs = ({
  handleInputs,
  handleSubmit,
  transactionName,
  transactionAmount
}) => {
  return (
    <Box>
      <Typography>Add new transactions</Typography>

      <form onSubmit={handleSubmit}>
        <Box>
          <TextField
            sx={{ mr: 1 }}
            name="transaction-name"
            id="transaction name"
            helperText="Describe the transaction"
            variant="standard"
            placeholder="Enter text..."
            onChange={(e) => handleInputs(e)}
            value={transactionName}
          />
          <TextField
            sx={{ ml: 1 }}
            value={transactionAmount}
            name="transaction-amount"
            id="transaction amount"
            type="number"
            variant="standard"
            placeholder="Enter amount..."
            helperText="negative for Expense and positive for Income"
            onChange={(e) => handleInputs(e)}
          />
        </Box>
        <Box textAlign="center" sx={{ m: 2 }}>
          <Button variant="contained" type="submit">
            Add transaction
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Inputs;
