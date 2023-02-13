import { useState } from "react";
import "../styles.css";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
const History = ({ transactions, handleDelete, handleOpen }) => {
  const [page, setPage] = useState(0);

  const handlePrev = () => {
    if (page > 0) setPage((page) => page - 1);
  };

  const handleNext = () => {
    if (transactions.length / 2 > page + 1) setPage((page) => page + 1);
  };
  return (
    <Box>
      <h3>History</h3>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 400 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Description</TableCell>
              <TableCell align="right">Amount</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.slice(page * 4, page * 4 + 4).map((transaction) => {
              let classNameForTransaction = "transactions";
              classNameForTransaction +=
                transaction.amount > 0 ? " positive" : " negative";

              return (
                <TableRow
                  key={transaction.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {transaction.name}
                  </TableCell>
                  <TableCell align="right">{transaction.amount}</TableCell>
                  <TableCell align="right">
                    {" "}
                    <button onClick={() => handleOpen(transaction)}>
                      Edit
                    </button>
                    <button onClick={() => handleDelete(transaction)}>
                      Delete
                    </button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="prevNextBtns">
        <Button disabled={page <= 0} onClick={handlePrev}>
          Prev
        </Button>
        <Button
          disabled={Math.floor(transactions.length / 4) <= page}
          onClick={handleNext}
        >
          Next
        </Button>
      </div>
    </Box>
  );
};

export default History;
