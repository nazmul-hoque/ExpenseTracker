import Box from "@mui/material/Box";
import Typrography from "@mui/material/Typography";
const Balance = ({ income, expense }) => {
  return (
    <Box textAlign="center" sx={{ m: 5 }}>
      <Typrography>Your balance</Typrography>
      <Typrography variant="h3">
        ${(income - Math.abs(expense)).toFixed(2)}
      </Typrography>
    </Box>
  );
};

export default Balance;
