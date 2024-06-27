import React from "react";
import Header from "./Header";

const Hero = () => {
  console.log(window.innerHeight);
  return (
    <div className="bg-primary text-white h-dvh px-20 py-5 relative">
      <Header />
      <div className="absolute z-0 top-0 left-0 w-full h-full object-cover hero-image-small ">
        <div className="absolute z-0 top-0 left-20 w-full h-full object-cover hero-image-mid ">
          <img
            src="/images/hero-image.jpg"
            alt="hero-image"
            className="absolute z-0 top-0 left-5 w-full h-full object-cover hero-image"
          />
        </div>
      </div>
      <div className="absolute z-10 flex gap-2 justify-between items-center py-20">
        <div className="flex flex-col gap-4 w-2/3">
          <div className="w-max">
            <h1 className="font-extrabold font-sans text-5xl">
              Discover your{" "}
            </h1>
            <h1 className="font-extrabold font-sans text-5xl"> next Hike</h1>
          </div>
          <div className="w-max">
            {" "}
            <h3 className="font-semibold font-sans uppercase">Discover your</h3>
            <h3 className="font-semibold  font-sans uppercase">next Hike</h3>
          </div>
          <div className="w-max">
            {" "}
            <p className="font-medium font-sans  text-lg">
              Lorem ipsum dolor sit
            </p>
            <p className="font-medium font-sans text-lg">consectetur</p>
            <p className="font-medium font-sans text-lg">
              adipisicing consectetur elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
