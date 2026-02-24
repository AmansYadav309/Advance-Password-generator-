import React from 'react';

const Background = ({children}) => {
    return (
        <div className="background  min-h-screen 
         flex
         justify-center
         bg-radial-[at_60%_25%] from-green-400 via-emerald-800 to-teal-950 to-90%
        ">
            {children}
        </div>
    );
}

export default Background;
