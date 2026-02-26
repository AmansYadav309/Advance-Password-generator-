import React, { useState } from 'react';
import Background from '../components/Background';
import PasswordBox  from '../components/PasswordBox';
import StregthBar from '../components/StregthBar';
import LengthSlider from "../components/LenghtSlider"
import GenerateButton from "../components/GenerateButton"

import Options from '../components/Options';

const PasswordPage = () => {

    const [password , setPassword] = useState("");
    const [ length , setLength]  = useState(8);
    const [uppercase , setUppercase ] = useState(true);
    const [lowercase , setLowercase ] = useState(true);
    const [number , setNumber ] = useState(true);
    const [special , setSpecial ] = useState(true);
    
    const generatePassword = () => { 
        let char = "" ;
         if(uppercase){
             char += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
         }
          if(lowercase){
             char += "abcdefghijklmnopqrstuvwxyz"
         }
          if(number){
             char += "0123456789"
         }
          if(special){
             char += "!@#$%^&*()"
         }

        let newPassword = " ";

        for(let i=0 ; i<length ; i++){
          const randomIndex = Math.floor(
            Math.random()*char.length
          )

          newPassword += char[randomIndex];
        }
        
        setPassword(newPassword)
    }
    return (
        <Background>
        <div className="text-center mt-[45px]">

            <h1  className='text-3xl    font-bold text-center text-white font-sans  ' > Password Generator </h1>
            <p className='    text-gray-300   font-sans  mt-1 '>
                 Generate ultra-secure passwords with industrial-grade entropy.
            </p>

            <div className=' text-center w-[500px]  h-[470px] bg-gray-800 p-6 rounded-2xl  border border-green-400  shadow-2xl shadow-olive-950 mt-8'>

             <PasswordBox  password={password}/>
             <StregthBar password ={password}/>

             <LengthSlider 
             length={length}
             setLength={setLength}
             />

             <Options 
              uppercase={uppercase}
              setUppercase = {setUppercase}

              lowercase={lowercase}
              setLowercase={setLowercase}

              number={number}
              setNumber={setNumber}

              special={special}
              setSpecial={setSpecial}
              />

             <GenerateButton  generatePassword={generatePassword}/>

            </div>
            </div>
        </Background>
    );
}

export default PasswordPage;
