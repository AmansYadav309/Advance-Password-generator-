import React from "react";
import Switch from "@mui/material/Switch";

const Options = () => {
  return (
    <div className="grid  grid-cols-2 gap-4 mt-5 ">
      <div
        className="bg-gray-900 rounded p-2  flex
            items-center  justify-between rounded-xl  pl-3   "
      >
        <span className="text-white font-sans  ">Uppercase</span>

        <Switch
          defaultChecked
          
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
