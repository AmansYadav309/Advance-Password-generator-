import React from "react";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Button from '@mui/material/Button';




const PasswordBox = () => {
  return (
    <div
      className=" h-[63px]
         bg-gray-900 p-4 rounded-xl 
         flex
         justify-between
         items-center 
         "
    >
        <span className="text-emerald-400  text-lg  font-semibold tracking-wider font-sans ">  k8#LpS29!vXq </span>
       <Button variant="contained" className="rounded-xl "   
        startIcon={<ContentCopyIcon />}  style={{
          background:"#10b981",
        }}>
          Copy
        </Button>
    </div>
  );
};

export default PasswordBox;
