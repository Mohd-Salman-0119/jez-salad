import { Button, Card, Carousel } from "@material-tailwind/react";
import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { review1 } from "../assets/image";

const About = () => {
  const [count, setCount] = useState(0);

  const handleCount = (value) => {
    setCount(count + value);
  };
  return (
    <div className="bg-light-cream grid grid-cols-2 justify-center items-center p-12">
      <div className="flex justify-between flex-col gap-4 lg:px-10 xl:px-24 p-6">
        <h1 className="text-5xl font-semibold w-4/5">
          What Are People Saying <spam className="text-orange">About Us</spam>
        </h1>
        <p className="text-base font-normal text-para-color w-3/4">
          We are very happy if you are satisfied with our service and products,
          let's read pure reviews from customers who bought our products.
        </p>
        <h1 className="text-5xl font-semibold w-4/5">
          0{count}/
          <sub className="text-base font-normal text-para-color">05</sub>
        </h1>
        <div className="flex gap-2">
          <Button className="p-4 bg-orange/50" onClick={() => handleCount(-1)}>
            <FaArrowLeft />
          </Button>
          <Button className="p-4 bg-orange" onClick={() => handleCount(+1)}>
            <FaArrowRight />
          </Button>
        </div>
      </div>
      <div className="flex gap-3 p-6">
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
    </div>
  );
};

const ReviewCard = () => (
  <Card className="bg-white relative w-max p-3">
    <div className="relative -top-6 ">
      <img src={review1} />
    </div>
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-semibold ">Selena Gomz</h1>
        <p>22 Years</p>

      </div>
      <p className="text-justify">
        The salad is fresh!!! Don't ask about the sauce again, it's really
        delicious, it's going to be routine. I recommend this salad to all of
        you guys! because they really take care of the quality.
      </p>
    </div>
  </Card>
);

export default About;
