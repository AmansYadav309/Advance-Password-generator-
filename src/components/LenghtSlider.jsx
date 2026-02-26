import React, { useState } from "react";
import Slider from "@mui/material/Slider";

function valuetext(value) {
  return `${value}`;
}


const LengthSlider = ({length , setLength }) => {

  const updateInput = (e) => { 
    const value = e.target.value
    if(value=== "" ){
      setLength("")
      return;
    }
   let num = Number(value);
    setLength(num)
   } 

  return (
    <div className="mt-5 w-[80%] ">
      <div className="flex  items-center justify-between w-[125%]">
      <p className="text-gray-400 mr-[100px]  font-sans  tracking-wider ">Password Length</p>
     <samp>
      <input
        type="number"
        className=" w-7 rounded  border border-green-400  bg-gray-900  pl-1 text-white
        opacity-75" 
        onChange={updateInput}
        value={length}
        
       />
      </samp> 
      </div>
      <Slider
        value={length}
        onChange={(e,newVal)=> setLength(newVal)}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        step={1}
        min={5}
        max={32}
        sx={{
          width: 420,
          color: "#4ade80",
          "& .MuiSlider-thumb": {
            backgroundColor: "#4ade80",
          },

          "& .MuiSlider-track": {
            backgroundColor: "#14532d",
          },

          "& .MuiSlider-rail": {
            backgroundColor: "#14532d",
          },
        }}
      />
    </div>
  );
};

export default LengthSlider;
