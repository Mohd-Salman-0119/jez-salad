import React from "react";
import MenuCard from "./MenuCard";
import { Icon1, Icon2, Icon3 } from "../assets/image";

const Menu = () => {
  return (
    <div className="my-5" id="menu">
      <div className="md:grid md:grid-cols-2 gap-2 md:gap-20 items-center flex flex-col">
        <div className="md:py-3">
          <h1 className="xl:text-[48px] lg:text-4xl md:text-3xl text-2xl xl:leading-[67.3px] text-left font-semibold tracking-tight text-gray-black">
            WHY CHOOSE US FOR{" "}
            <spam className="text-orange">YOUR HEALTHY FOOD</spam>
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

      <div className="md:grid md:grid-cols-3 xl:gap-12 lg:gap-5 gap-4 flex flex-wrap lg:px-6 sm:p-3 mt-4">
        <MenuCard
          Icon={Icon1}
          heading={"Own fruit orchard"}
          paragraph="Langsung dari Kebun Sendiri yang 
tersebar di setiap provinsi yang 
memiliki cabang toko Jez Salad."
        />
        <MenuCard
          Icon={Icon2}
          heading={"#1 Healthy Fruit Salad"}
          paragraph="The pioneer of healthy fruit salads that 
are delicious & suitable for all people 
with the best quality assurance."
        />
        <MenuCard
          Icon={Icon3}
          heading={"100 Top Brand"}
          paragraph="We are one of the best brands in the 
Food and Beverage sector 
in Indonesia."
        />
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
