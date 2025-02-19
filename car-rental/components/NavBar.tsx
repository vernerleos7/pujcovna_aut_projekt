import Image from 'next/image'
import React from 'react'

function NavBar() {
  return (
    <div className='flex items-center justify-between shadow'>
      <Image
        src='/logo-auto.png'
        alt='logo'
        height={150}
        width={100}
      />
      <div className='hidden md:flex items-center'>
        <div className='absolute left-1/2 transform -translate-x-1/2 flex gap-5'>
          <h2 className='hover:bg-blue-500 p-2 rounded-full hover:text-white font-bold cursor-pointer'>Domů</h2>
          <h2 className='hover:bg-blue-500 p-2 rounded-full hover:text-white font-bold cursor-pointer'>Nabídka vozů</h2>
          <h2 className='hover:bg-blue-500 p-2 rounded-full hover:text-white font-bold cursor-pointer'>Kontakt</h2>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
