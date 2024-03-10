import React from "react";

const Menu = () => {
  return (
    <div className="my-5">
      <div className="md:grid md:grid-cols-2 md:gap-20 items-center flex flex-col">
          <div className="md:py-3">

          <h1 className="xl:text-[48px] lg:text-4xl md:text-3xl text-2xl xl:leading-[67.3px] text-left font-semibold tracking-tight text-gray-black">
               WHY CHOOSE US FOR <spam className="text-orange">YOUR HEALTHY FOOD</spam>
          </h1>
          </div>
        <div className="flex md:justify-end md:py-3 ">
          <p className="sm:text-xl text-sm font-medium text-para-color text-left flex justify-end xl:w-3/4">
            We continue to consistently choose and maintain the quality of the
            fruit served, so that it remains fresh and nutritious when you eat
            it.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Menu;

// font-family: Poppins;
// font-size: 20px;
// font-weight: 500;
// line-height: 36px;
// letter-spacing: -0.02em;
// text-align: left;
