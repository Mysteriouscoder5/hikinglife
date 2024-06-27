import React from "react";
import Indicator from "./Indicator";

const Recover = () => {
  return (
    <div className="px-20 py-20 grid grid-cols-2 gap-16">
      <div className="items-center gap-6 my-10 justify-between">
        <h1 className="text-black font-sans font-regular text-2xl font-bold uppercase">
          How to recover from <br></br>
          <span className="text-black font-sans font-regular text-2xl uppercase">
            a hike
          </span>
        </h1>
        <div className="my-5">
          <Indicator />
        </div>
        <div className="flex flex-col-2 justify-center items-center gap-6 text-center">
          {/* <div className="size-32 rounded-full bg-primary"></div> */}
          <img
            src="/images/activities-icon.png"
            alt="activities"
            className="size-32 rounded-full object-scale-down bg-primary"
          />
          <div className="text-left">
            <p className="text-black opacity-70 font-sans font-medium py-1">
              - Lorem, ipsum dolor sit
            </p>
            <p className="text-black opacity-70 font-sans font-medium py-1">
              - Amet consectetur adipisicing elit.
            </p>
            <p className="text-black opacity-70 font-sans font-medium  py-1">
              - Perferendis accusantium atque.
            </p>
            <p className="text-black opacity-70 font-sans font-medium  py-1">
              - Laborum quia dicta.
            </p>
          </div>
        </div>
        <div className="flex flex-col-2 justify-center items-center gap-6 text-center py-5">
          {/* <div className="size-32 rounded-full bg-primary"></div> */}
          <img
            src="/images/hiking-icon.png"
            alt="hiking"
            className="size-32 rounded-full object-scale-down bg-primary"
          />
          <div className="text-left">
            <p className="text-black opacity-70 font-sans font-medium py-1">
              - Lorem, ipsum dolor sit
            </p>
            <p className="text-black opacity-70 font-sans font-medium py-1">
              - Amet consectetur adipisicing elit.
            </p>
            <p className="text-black opacity-70 font-sans font-medium  py-1">
              - Perferendis accusantium atque.
            </p>
            <p className="text-black opacity-70 font-sans font-medium  py-1">
              - Laborum quia dicta.
            </p>
          </div>
        </div>
        <div className="flex flex-col-2 justify-center items-center gap-6 text-center ">
          {/* <div className="size-32 rounded-full bg-primary"></div> */}
          <img
            src="/images/mountains-icon.png"
            alt="mountains"
            className="size-32 rounded-full object-scale-down bg-primary"
          />

          <div className="text-left">
            <p className="text-black opacity-70 font-sans font-medium py-1">
              - Lorem, ipsum dolor sit
            </p>
            <p className="text-black opacity-70 font-sans font-medium py-1">
              - Amet consectetur adipisicing elit.
            </p>
            <p className="text-black opacity-70 font-sans font-medium  py-1">
              - Perferendis accusantium atque.
            </p>
            <p className="text-black opacity-70 font-sans font-medium  py-1">
              - Laborum quia dicta.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col ml-20 justify-left items-left text-left pt-20">
        <img
          src="/images/recover.jpg"
          alt="recover"
          className="size-80 my-10 object-cover object-center rounded-full "
        />
        <p className="text-lAccent font-funky font-semibold text-3xl text-left uppercase">
          make sure your
        </p>
        <p className="text-lAccent font-funky font-semibold text-3xl uppercase">
          gear fits
        </p>
      </div>
    </div>
  );
};

export default Recover;
