import React from 'react'

function SearchInput() {
  return (
    <div className='mt-5'>
        <h2 className='text-center text-[20px] text-gray-400 mb-3'>Vyhledání auta</h2>
        <div className='flex justify-center'>
            <div className='flex bg-gray-100 p-1 px-5 gap-2 rounded-full divide-x'>
            <div className='flex items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
            </svg>


                <input type="text" 
                placeholder='Lokace'
                className='p-2 outline-none bg-transparent'/>
            </div>
            <div>
                <input type="date" 
                className='p-2 outline-none bg-transparent text-gray-400'/>
            </div>
            </div>
        </div>
    </div>
  )
}

export default SearchInput