import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { FaArrowRightLong } from "react-icons/fa6";
import React from "react";

const MenuCard = ({ Icon, paragraph, heading }) => {
  return (
    <Card className="rounded-[3rem] group hover:shadow-2xl hover:shadow-light-cream transition-all duration-300 ease-in-out cursor-pointer border-light-cream border-2 md:py-4 xl:py-7 hover:scale-105 -z-0 py-1">
      <CardBody className="my-2">
        <img src={Icon} />
        <div className="md:my-3 sm:my-2 my-1 flex flex-col gap-2">
          <Typography className="xl:text-2xl text-xl font-semibold text-black">
            {heading}
          </Typography>
          <Typography className="text-base font-normal text-para-color">
            {paragraph}
          </Typography>
        </div>
        <div className="flex gap-2 items-center hover:bg-orange group-hover:bg-orange  w-max p-3 rounded-full group-hover:text-white hover:text-white transition-all duration-300 ease-in-out cursor-pointer">
          Learn more <FaArrowRightLong />
        </div>
      </CardBody>
    </Card>
  );
};

export default MenuCard;
