import React from "react";
import Switch from "@mui/material/Switch";

const Options = ({
    uppercase,
    setUppercase ,

    lowercase,
    setLowercase,

    number,
    setNumber,

    special,
    setSpecial,
}) => {
  return (
    <div className="grid  grid-cols-2 gap-4 mt-5 ">
      <div
        className="bg-gray-900 rounded p-2  flex
            items-center  justify-between rounded-xl  pl-3   "
      >
        <span className="text-white font-sans  ">Uppercase</span>

        <Switch
          defaultChecked
          checked={uppercase}
          onClick={(e)=>setUppercase(e.target.checked)}
          sx={{
            "& .MuiSwitch-switchBase.Mui-checked": {
              color: "#4ade80",
            },

            "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
              backgroundColor: "#4ade80",
            },
          }}
        />
      </div>


      <div
        className="bg-gray-900 rounded p-2 flex
            items-center  justify-between  rounded-xl  pl-3   "
      >
        <span className="text-white font-sans  ">Lowercase
         </span>

        <Switch
          defaultChecked
          checked={lowercase}
          onClick={(e)=>setLowercase(e.target.checked)}
          sx={{
            "& .MuiSwitch-switchBase.Mui-checked": {
              color: "#4ade80",
            },

            "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
              backgroundColor: "#4ade80",
            },
          }}
        />
      </div>


      <div
        className="bg-gray-900 rounded p-2 flex
            items-center  justify-between  rounded-xl  pl-3  "
      >
        <span className="text-white font-sans  ">Numbers</span>

        <Switch
          defaultChecked
          checked={number}
          onClick={(e)=>setNumber(e.target.checked)}
          sx={{
            "& .MuiSwitch-switchBase.Mui-checked": {
              color: "#4ade80",
            },

            "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
              backgroundColor: "#4ade80",
            },
          }}
        />
      </div>

      <div
        className="bg-gray-900 rounded p-2 flex
            items-center  justify-between  rounded-xl  pl-3   "
      >
        <span className="text-white font-sans  ">Symbols</span>

        <Switch
          defaultChecked
          checked={special}
          onClick={(e)=>setSpecial(e.target.checked)}
          sx={{
            "& .MuiSwitch-switchBase.Mui-checked": {
              color: "#4ade80",
            },

            "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
              backgroundColor: "#4ade80",
            },
          }}
        />
      </div>
    </div>
  );
};

export default Options;
