import React, { useEffect, useState } from 'react';

function CarsFiltersOption({carsList,setBrand,orderCarList}: any) {
  const [brandList, setBrandList]=useState<any>();
  const BrandSet=new Set();

  useEffect(() => {
    if (carsList) {
      filterCarList();
    }
  }, [carsList]);

  const filterCarList = () => {
    carsList.forEach((element: any) => {
      BrandSet.add(element.carBrand);
    });
    console.log(BrandSet);
    setBrandList(Array.from(BrandSet));
  };

  return (
    <div className="mt-10 flex items-center justify-between">
      <div className="mb-5">
        <h2 className="text-[30px] font-bold">Nabídka aut</h2>
        <h2>Vyberte si z aktuální nabídky</h2>
      </div>
      <div className="flex gap-5" data-theme="light">
        <select
          className="select select-bordered w-full md:block max-w-xs hidden"
          defaultValue="default"
          onChange={(e) => setBrand(e.target.value)}>
          <option value="default" disabled>
            Značka
          </option>
          {brandList&&brandList.map((brand: string, index: number) => (
            <option key={index}>{brand}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default CarsFiltersOption;
