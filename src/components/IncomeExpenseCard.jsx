import "../styles.css";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";

const IncomeExpenseCard = ({ transactions, income, expense }) => {
  return (
    <Card className="income-expense">
      <div className="income">
        <Typography variant="h5">Income</Typography>
        <Typography variant="h4" component="h5">
          ${income.toFixed(2)}
        </Typography>
      </div>
      <div className="expense">
        <Typography variant="h5" sx={{ color: "#666" }}>
          Expense
        </Typography>
        <Typography variant="h4" component="h5">
          ${expense.toFixed(2)}
        </Typography>
      </div>
    </Card>
  );
};

export default IncomeExpenseCard;
