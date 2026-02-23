import React from "react";

const StregthBar = () => {
  return (
    <div className="mt-3">
      <p className="text-gray-400 mb-2 mr-[300px]  font-sans  tracking-wider ">
        Security Score{" "}
      </p>

      <div
        className="h-2 
              w-full bg-gray-700 
              "
      >
        <div className="w-[80%] h-2 bg-green-400 rounded"></div>
      </div>
    </div>
  );
};

export default StregthBar;
