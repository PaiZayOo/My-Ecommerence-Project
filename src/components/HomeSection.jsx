import React from "react";
import shopsvg from '../assets/shop.svg'
import Products from "./Products";
const HomeSection = () => {
  return (
    <div className=" container  mt-3 p-10 rounded-3xl mx-auto  bg-slate-200 ">
      <div className="flex flex-wrap items-center justify-around">
        <div >
            <div className=" ml-[70px]">
            <h1 className=" text-4xl font-serif font-extrabold text-blue-600  tracking-wide leading-11">Get the best product </h1>
            <h1 className=" text-4xl  font-serif font-extrabold  text-blue-600">for you from our shop!</h1>
            </div>
        </div>
        <div className=" mt-10">
            <img src={shopsvg} alt="" width={400} height={200} />
        </div>
      </div>
      <Products/>
    </div>
  );
};

export default HomeSection;
