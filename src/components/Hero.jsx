import React from "react";
import Header from "./Header";

const Hero = () => {
  console.log(window.innerHeight);
  return (
    <div className="bg-primary text-white h-dvh px-20 py-5 relative">
      <Header />
      <img
        src="/images/hero-image.jpg"
        alt="hero-image"
        className="absolute z-0 top-0 left-0 w-full h-full object-cover hero-image "
      />
      <div className="absolute z-10 flex gap-2 justify-between items-center py-20">
        <div className="flex flex-col gap-4 w-1/2">
          <div>
            <h1 className="font-extrabold text-3xl">Discover your </h1>
            <h1 className="font-extrabold text-3xl"> next Hike</h1>
          </div>
          <div>
            <h3 className="font-semibold uppercase opacity-50">
              Discover your
            </h3>
            <h3 className="font-semibold uppercase opacity-50"> next Hike</h3>
          </div>
          <div>
            <p className="font-medium text-lg   ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              nulla saepe obcaecati.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
