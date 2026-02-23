import React from 'react';
import Background from '../components/Background';
import PasswordBox  from '../components/PasswordBox';
import StregthBar from '../components/StregthBar';
import LengthSlider from "../components/LenghtSlider"

const PasswordPage = () => {
    return (
        <Background>
        <div className="text-center mt-[80px]">

            <h1  className='text-3xl    font-bold text-center text-white font-sans  ' > Password Generator </h1>
           

            <p className='    text-gray-300   font-sans  mt-1 '>
                 Generate ultra-secure passwords with industrial-grade entropy.
            </p>

            <div className=' text-center w-[470px]  h-[480px] bg-gray-800 p-6 rounded-2xl  border border-green-400  shadow-2xl shadow-olive-950 mt-8'>

             <PasswordBox />

             <StregthBar/>

             <LengthSlider/>
            </div>
            </div>
        </Background>
    );
}

export default PasswordPage;
