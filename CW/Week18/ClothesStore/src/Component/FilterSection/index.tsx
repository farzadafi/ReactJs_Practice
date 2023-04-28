import React from "react";

const FilterSection = () => {
  return (
    <div className={"flex justify-between border-b pb-4 border-slate-400"}>
      <p>6 Products</p>
      <div className={"flex gap-2"}>
        <label htmlFor="">Order</label>
        <select name="" id="">
          <option value="Lowest">Lowest</option>
          <option value="Highest">Highest</option>
        </select>
      </div>
      <div className={"flex gap-2"}>
        <label htmlFor="">Filter</label>
        <select name="" id="">
          <option value="Lowest">All</option>
          <option value="Highest">Xl</option>
          <option value="Highest">XS</option>
          <option value="Lowest">X</option>
          <option value="Lowest">M</option>
          <option value="Lowest">S</option>
          <option value="Lowest">XXL</option>
        </select>
      </div>
    </div>
  );
};

export default FilterSection;