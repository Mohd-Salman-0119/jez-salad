import React from "react";

import { JezSalad } from "../assets/image";
import { Button, Typography } from "@material-tailwind/react";

const Hero = () => {
  return (
    <div
      className="md:grid md:grid-cols-2 flex flex-col-reverse justify-center"
      id="home"
    >
      {/* left */}
      <div className="flex flex-col items-start justify-center gap-3">
        <div className="bg-secondry-orange text-orange md:p-3 p-2 rounded-full w-max sm:text-base text-xs">
          #1 Best Healthy Salad
        </div>

        <h1 className="sm:text-3xl text-2xl lg:text-5xl xl:text-7xl lg:leading-[75.6px] xl:leading-[85.6px] tracking-tighter-[-1%] text-gray-black font-bold">
          <span className="text-orange">Skip</span> The Diet, Just Eat Healthy
          With Jez Salad
        </h1>
        <p className="sm:leading-[32px] tracking-tighter-[-2%] text-sm sm:text-xl xl:w-3/4 text-para-color">
          Imagine you don't need a diet because we provide healthy and delicious
          food for you!
        </p>

        <div className="flex md:gap-14 md:justify-start justify-between w-full">
          <Typography className="text-black ">
            <h1 className="text-sm sm:text-xl font-bold text-gray-black">
              5.000+
            </h1>
            <p className="text-para-color sm:text-base text-xs">Customer</p>
          </Typography>
          <Typography className="text-black ">
            <h1 className="text-sm sm:text-xl font-bold text-gray-black">
              8.000+
            </h1>
            <p className="text-para-color sm:text-base text-xs">Delivery</p>
          </Typography>
          <Typography className="text-black ">
            <h1 className="text-sm sm:text-xl font-bold text-gray-black">
              1.000+
            </h1>
            <p className="text-para-color sm:text-base text-xs">Ratings</p>
          </Typography>
        </div>
        <Button className="rounded-full bg-orange text-white capitalize font-semibold md:w-auto w-full">
          Order Food
        </Button>
      </div>
      {/* right */}
      <div className="flex justify-center">
        <img src={JezSalad} className="xl:w-4/5" alt="Jez Salad" />
      </div>
    </div>
  );
};

export default Hero;
