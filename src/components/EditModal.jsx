import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "../styles.css";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4
};

export default function BasicModal({
  isOpen,
  setIsOpen,
  editTransactionData,
  handleUpdate
}) {
  const [localTransaction, setLocalTransaction] = React.useState(
    editTransactionData
  );

  const handleClose = () => {
    setIsOpen(false);
  };

  const updateTransactionName = (e) => {
    setLocalTransaction({ ...localTransaction, name: e.target.value });
  };
  const updateTransactionAmount = (e) => {
    const inputAmount = e.target.value;
    if (!isNaN(inputAmount)) {
      setLocalTransaction({
        ...localTransaction,
        amount: Number(e.target.value)
      });
    }
  };

  const currencies = [
    {
      value: "USD",
      label: "$"
    },
    {
      value: "EUR",
      label: "€"
    },
    {
      value: "CAD",
      label: "C$"
    },
    {
      value: "JPY",
      label: "¥"
    }
  ];

  return (
    <div>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CloseIcon className="closeBtn" onClick={handleClose} />
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Update transaction
          </Typography>
          <form action="" className="modal-form" id="modal-modal-description">
            <TextField
              variant="standard"
              label="Transaction description"
              helperText="Enter the description"
              value={localTransaction.name}
              onChange={(e) => updateTransactionName(e)}
            />
            <TextField
              select
              label="Native select"
              defaultValue="CAD"
              SelectProps={{
                native: true
              }}
              helperText="Please select your currency"
              variant="standard"
            >
              {currencies.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
            <TextField
              variant="standard"
              label="Transaction Amount"
              helperText="Enter the amount"
              value={localTransaction.amount}
              onChange={(e) => updateTransactionAmount(e)}
            />
            <Button
              className="btns"
              variant="contained"
              onClick={() => handleUpdate(localTransaction)}
            >
              Update
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
