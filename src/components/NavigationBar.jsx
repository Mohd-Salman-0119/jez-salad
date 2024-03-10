import { Button, Navbar, Typography } from "@material-tailwind/react";
import { IoReorderThree } from "react-icons/io5";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const NavigationBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
          setActiveLink(section.id);
        }
      });
    };

    console.log(activeLink);

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="m-auto sticky top-0">
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 shadow-none flex justify-between items-center">
        <Typography className="text-black font-bold md:leading-[28.13px] text-sm md:text-xl">
          <span className="text-orange">JEZ</span> SALAD
        </Typography>
        <ul className="mt-2 mb-4 md:flex gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 hidden">
          <Typography
            as="li"
            className={`${
              activeLink === "home" ? "text-orange" : "text-black"
            }`}
          >
            <a href="#home">Home</a>
          </Typography>
          <Typography
            as="li"
            className={`${
              activeLink === "menu" ? "text-orange" : "text-black"
            }`}
          >
            <a href="#menu">Menu</a>
          </Typography>
          <Typography
            as="li"
            className={`${
              activeLink === "contact" ? "text-orange" : "text-black"
            }`}
          >
            <a href="#contact">Contact</a>
          </Typography>
          <Typography
            as="li"
            className={`${
              activeLink === "about" ? "text-orange" : "text-black"
            }`}
          >
            <a href="#about">About Us</a>
          </Typography>
        </ul>
        <Button className="rounded-full bg-orange text-white capitalize font-medium md:flex hidden">
          Sign
        </Button>
        <IoReorderThree
          className="text-black text-2xl flex md:hidden"
          onClick={() => setToggle((p) => !p)}
        />
      </Navbar>
      {toggle && <Links activeLink={activeLink} />}
    </div>
  );
};

const Links = ({ activeLink }) => {
  return (
    <Navbar
      className={`flex md:hidden gap-2 lg:mb-0 lg:mt-0 flex-col justify-center items-center lg:items-center rounded-none h-44 border-none`}
    >
      <Typography
        as="li"
        className={`${activeLink === "home" ? "text-orange" : "text-black"}`}
      >
        <a href="#home">Home</a>
      </Typography>
      <Typography
        as="li"
        className={`${activeLink === "menu" ? "text-orange" : "text-black"}`}
      >
        <a href="#menu">Menu</a>
      </Typography>
      <Typography
        as="li"
        className={`${activeLink === "contact" ? "text-orange" : "text-black"}`}
      >
        <a href="#contact">Contact</a>
      </Typography>
      <Typography
        as="li"
        className={`${activeLink === "about" ? "text-orange" : "text-black"}`}
      >
        <a href="#about">About Us</a>
      </Typography>
    </Navbar>
  );
};

export default NavigationBar;
