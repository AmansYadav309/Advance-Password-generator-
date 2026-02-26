import React, { useState } from "react";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const PasswordBox = ({ password }) => {
  const [open, setOpen] = useState(false);

  const copyPassword = () => {
    navigator.clipboard.writeText(password);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div
        className=" h-[63px]
         bg-gray-900 p-4 rounded-xl 
         flex
         justify-between
         items-center 
         "
      >
        <span className="text-emerald-400  text-lg  font-semibold tracking-wider font-sans ">
          {" "}
          {password}{" "}
        </span>
        <Button
          variant="contained"
          className="rounded-xl  "
          onClick={copyPassword}
          startIcon={<ContentCopyIcon />}
          style={{
            background: "#10b981",
          }}
        >
          Copy
        </Button>
      </div>

      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      >
        <Alert severity="success" variant="filled" onClose={handleClose}>
          Password Copied!
        </Alert>
      </Snackbar>
    </>
  );
};

export default PasswordBox;
