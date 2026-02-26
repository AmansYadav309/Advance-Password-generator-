import React from 'react';
import Button from "@mui/material/Button";

const GenerateButton = ({generatePassword}) => {
    return (
       <Button
variant="contained"
fullWidth
onClick={generatePassword}
style={{
background:"#10b981",
padding:"12px",
fontWeight:"bold",
marginTop: "25px"
}}
>

GENERATE PASSWORD

</Button>

    );
}

export default GenerateButton;
