import React from "react";




const StregthBar = ({password}) => {

  const calcStrength=()=> { 
  let score = 0 ; 

  if(password.length >= 8 ) score +=25; 

  if(/[A-Z]/.test(password)) score+=25;

  if(/[0-9]/.test(password)) score+=25;

  if(/[!@#$%^&*()]/.test(password)) score+=25;

  return score ;
}


const strength = calcStrength();


  return (
    <div className="mt-5">
       <div className="flex  items-center justify-between w-[100%]">
      <p className="text-gray-400 mb-2 mr-[300px]  font-sans  tracking-wider ">
        Security Score{" "}
      </p>

      <p className="text-green-400 text-sm mt-1">{strength}%  </p>
         </div>                 
      <div
        className="  w-full h-1  bg-gray-700 "
       
       
      >
        <div className=" h-1 bg-green-400 rounded"
              style={{width : `${strength }%`}}
        ></div>
      </div>
    </div>
  );
};
 
export default StregthBar;
