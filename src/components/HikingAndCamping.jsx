import React from "react";
import Indicator from "./Indicator";

const HikingAndCamping = () => {
  return (
    <div className="px-20 py-10">
      <div>
        <h1 className="text-black font-sans font-regular text-2xl uppercase">
          hiking and camping <br></br>
          <span className="font-sans font-semibold">classes</span>
        </h1>
        <div className="my-5">
          <Indicator />
        </div>
      </div>
      <div className="flex items-center gap-6 my-10 justify-between">
        <div className="flex flex-col justify-center items-center gap-6 text-center">
          {/* <div className="size-28 rounded-full bg-primary"></div> */}
          <img
            src="/images/activities-icon.png"
            alt="activities"
            className="size-28 rounded-full object-scale-down bg-primary"
          />
          <h3 className="uppercase font-sans font-semibold text-lg">
            activities
          </h3>
          <p className="text-black opacity-70 font-sans font-medium text-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis accusantium atque laborum quia dicta.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-6 text-center">
          {/* <div className="size-28 rounded-full bg-primary"></div> */}
          <img
            src="/images/hiking-icon.png"
            alt="hiking"
            className="size-28 rounded-full object-scale-down bg-primary"
          />
          <h3 className="uppercase font-sans font-semibold text-lg">hiking</h3>
          <p className="text-black opacity-70 font-sans font-medium text-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis accusantium atque laborum quia dicta.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-6 text-center">
          {/* <div className="size-28 rounded-full bg-primary"></div> */}
          <img
            src="/images/mountains-icon.png"
            alt="mountains"
            className="size-28 rounded-full object-scale-down bg-primary"
          />

          <h3 className="uppercase font-sans font-semibold text-lg">
            mountains
          </h3>
          <p className="text-black opacity-70 font-sans font-medium text-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis accusantium atque laborum quia dicta.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HikingAndCamping;
