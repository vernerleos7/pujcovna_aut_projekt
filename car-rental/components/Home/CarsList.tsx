import React from 'react';
import CarCard from './CarCard';

function CarsList(props: any) {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
      {props.carsList.map((car: any, index: number) => (
        <div key={car.id || index}>
          <CarCard car={car} />
        </div>
      ))}
    </div>
  );
}

export default CarsList;
