import { Button, Card, Carousel } from "@material-tailwind/react";
import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { review1, review2, review3 } from "../assets/image";
import { Swiper, SwiperSlide } from "swiper/react";

import { EffectCards,Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

const About = () => {
  const [count, setCount] = useState(0);

  const handleCount = (value) => {
    setCount(count + value);
  };
  return (
    <div className="bg-light-cream grid grid-cols-1 md:grid-cols-2 justify-center items-center lg:px-10 xl:px-24 p-6">
      <div className="flex justify-between flex-col md:items-start items-center gap-4 ">
        <h1 className="xl:text-[48px] lg:text-4xl md:text-3xl text-2xl xl:leading-[67.3px] font-semibold">
          What Are People Saying <spam className="text-orange">About Us</spam>
        </h1>
        <p className="sm:text-xl text-sm font-normal text-para-color md:w-3/4 md:text-start text-center">
          We are very happy if you are satisfied with our service and products,
          let's read pure reviews from customers who bought our products.
        </p>
      </div>
      <div className="flex gap-3 my-4 justify-center">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper w-4/5 h-4/5 md:h-3/6 md:w-3/6 m-auto  "
        >
          <SwiperSlide className="p-6 rounded-xl bg-white border-2 border-light-cream shadow-lg">
            <ReviewCard
              image={review2}
              name={"Selena Gomz"}
              years={"22 Years"}
              description={
                "The salad is fresh!!! Don't ask about the sauce again, it's really delicious, it's going to be routine. I recommend this salad to all of you guys! because they really take care of the quality."
              }
            />
          </SwiperSlide>
          <SwiperSlide className="p-6 rounded-xl bg-white border-2 border-light-cream shadow-lg">
            <ReviewCard
              image={review3}
              name={"David Ken"}
              years={"24 Years"}
              description={
                "The salad is fresh!!! Don't ask about the sauce again, it's really delicious, it's going to be routine. I recommend this salad to all of you guys! because they really take care of the quality."
              }
            />
          </SwiperSlide>
          <SwiperSlide className="p-6 rounded-xl bg-white border-2 border-light-cream shadow-lg">
            <ReviewCard
              image={review1}
              name={"Jennifer Sina"}
              years={"21 Years"}
              description={
                "The salad is fresh!!! Don't ask about the sauce again, it's really delicious, it's going to be routine. I recommend this salad to all of you guys! because they really take care of the quality."
              }
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

const ReviewCard = ({ image, name, years, description }) => (
  <>
    <div className="relative">
      <img src={image} />
    </div>
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-semibold text-gray-black">{name}</h1>
        <p>{years}</p>
      </div>
      <p className="text-para-color ">{description}</p>
    </div>
  </>
);

export default About;
