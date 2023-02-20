import React from "react";

//import images

// src\assets\img\houses\house1.png

import Search from "./Search";
import Image from "./house-banner.png";

const Banner = () => {
  return (
    <section className="h-full max-h-[640px] mb-8 xl:mb-24">
      <div className="flex flex-col lg:flex-row">
        <div
          className="lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center 
        lg:text-left justify-center flex-1 px-4 lg:px-0"
        >
          <h1 className="text-4xl lg:text-[58px] font-semibold leading-none mb-6">
            <span className="text-violet-700">Rent</span> Your Dream house with
            us
          </h1>
          <p className="max-w-[480px] mb-8">
            Fancy or modest, your home is a place where you feel safe and cozy.
            A place where you can forget about your daily problems – a quiet
            oasis where you can recharge your batteries. And more importantly,
            your home is where your dearest ones await for you.
          </p>
        </div>
      </div>
      {/* <div className="hidden flex-1 lg:flex justify-end items-end">
        <img
          src={Image}
          alt="ambani house"
        />
      </div> */}
      <marquee width="100%" direction="left" height="20px" color="blue">
        <span className="text-violet-700">We </span> 
        are providing best rental service in our moto trust for customers
      </marquee>
      <Search />
    </section>
  );
};

export default Banner;
