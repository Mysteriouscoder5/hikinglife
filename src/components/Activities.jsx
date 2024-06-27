import React from "react";
import Header from "./Header";

const Activities = () => {
  return (
    <div className="bg-primary text-white h-dvh px-20 py-5 relative">
      <div className="absolute z-10 top-0 left-20 w-full h-full object-cover activity-image-mid ">
        <img
          src="/images/hero-image.jpg"
          alt="hero-image"
          className="absolute z-10 top-0 left-5 w-full h-full object-cover hero-image"
        />
      </div>
      <div className="absolute z-0 flex gap-2 justify-between items-center py-20">
        <div className="flex flex-col gap-4 w-2/3">
          <div className="w-max">
            <p className="text-oAccent font-semibold text-4xl uppercase font-funky">
              walking in the nature
            </p>
            <p className="text-oAccent font-semibold text-4xl uppercase font-funky">
              as a recreational
            </p>
            <p className="text-oAccent font-semibold text-4xl uppercase font-funky">
              activity
            </p>
          </div>
          <div>
            <h3
              className="font-semibold font-sans uppercase
uppercase text-2xl"
            >
              Activities
            </h3>
          </div>
          <div>
            <p className="font-sans font-medium text-lg">
              Lorem ipsum dolor sit amet
            </p>
            <p className="font-sans font-medium text-lg">
              consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
