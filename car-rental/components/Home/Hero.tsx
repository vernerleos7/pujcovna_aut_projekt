import Image from 'next/image';
import React from 'react';

function Hero() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="flex flex-col justify-center items-center text-center md:items-start md:text-left p-5">
        <h1 className="text-4xl md:text-5xl font-bold">
          Lorem ipsum, <br /> ipsum lorem.
        </h1>
        <button 
          type="button" 
          className="p-5 mt-10 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-800">
          Zobrazit nabídku aut
        </button>
      </div>
      
      <div className="flex items-center justify-center">
        <Image 
          src="/auto-banner.png"
          alt="herologo"
          height={700}
          width={650}
          className="w-full"
        />
      </div>
    </div>
  );
}

export default Hero;
