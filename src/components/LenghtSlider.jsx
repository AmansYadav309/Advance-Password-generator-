import React from 'react';
import Slider from "@mui/material/Slider";

function valuetext(value) {
  return `${value}`;
}

const LengthSlider = () => {

  return (

    <div className="w-full">

      <Slider
        aria-label="Password Length"
        defaultValue={8}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        step={1}
        min={5}
        max={32}
      />

    </div>

  );

}

export default LengthSlider;