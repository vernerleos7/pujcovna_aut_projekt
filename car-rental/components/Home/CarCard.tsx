import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { PiSteeringWheelFill } from "react-icons/pi";
import { MdArrowForwardIos } from "react-icons/md";
import { MdOutlineAirlineSeatReclineNormal } from "react-icons/md";
import { PiEngineFill } from "react-icons/pi";

function CarCard(props: any) {
    const [car, setCar] = useState<any>();

    useEffect(()=>{
        if(props.car)
        {
            setCar(props.car)
        }
    },[props.car])
    return car&&(
        <div className='group bg-gray-100 p-4 mb-5 cursor-pointer hover:bg-white hover:border-blue-300 border border-transparent shadow rounded-3xl'>
            <h2 className='text-[20px] font-bold mb-2'>{car.name}</h2>

            <span className='text-[28px] font-bold'>{car.price}</span>
            <span className='text-[12px] font-light'> CZK/den</span>
            <Image 
                src={car.image?.url}
                alt={car.name}
                width={220}
                height={200}
                className='w-[220px] h-[150px] mb-3 object-contain'
            />
            <div className='flex gap-5'>
                <div className='text-center text-gray-500'>
                    <PiSteeringWheelFill className='w-full text-[22px] mb-2' />
                    <h2 className='line-clamp-5 text-[14px font-light]'>{car.carType}</h2>
                </div>
                <div className='text-center text-gray-500'>
                    <MdOutlineAirlineSeatReclineNormal className='w-full text-[22px] mb-2' />
                    <h2 className='line-clamp-5 text-[14px font-light]'>{car.carSeats}</h2>
                </div>
                <div className='text-center text-gray-500'>
                    <PiEngineFill  className='w-full text-[22px] mb-2' />
                    <h2 className='line-clamp-5 text-[14px font-light]'>{car.carEngine}</h2>
                </div>
            </div>
            <button 
                type="button" 
                className="text-white w-full bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-semibold rounded shadow p-3 my-2 flex items-center justify-center gap-2"
            >Objednat <MdArrowForwardIos />
            </button>
        </div>
    );
}

export default CarCard;
