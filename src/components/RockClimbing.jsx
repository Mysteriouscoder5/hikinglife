import React from "react";

const RockClimbing = () => {
  return (
    <div className="px-20 py-20 grid grid-cols-2 gap-16">
      <div>
        <h1 className="text-3xl font-bold uppercase">
          Rock <br></br> Climbing
        </h1>
        <div className="my-10 flex flex-col justify-center items-start gap-6">
          <h3 className="font-semibold uppercase text-xl">
            1. Classes & events
          </h3>
          <p className="opacity-70 font-medium text-lg">
            Hatha is the most classic yoga. Its origin is in the Raya Yoga of
            Patanjali and classical texts such as Bhagavad Gita and Hatha Yoga
            Pradipika
          </p>
          <div className="w-full h-1 bg-lAccent rounded-sm"></div>
          <h3 className="font-semibold text-lg opacity-60">
            10 modules<br></br> divided into 7 weeks
          </h3>
          <div className="flex gap-10">
            <p className="text-black capitalize font-semibold text-xl">
              start<br></br> april 15 <br></br>20:00 hr
            </p>
            <p className="text-black capitalize font-semibold text-xl">
              price<br></br>$900
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-20 justify-center items-center text-center">
      <img
          src="/images/rock-climber.jpg"
          alt="rock-climber"
          className="size-80 object-cover object-center rounded-full "
        />
        <p className="text-orange font-semibold text-2xl uppercase font-mono">
          walking in the nature as a recreational activity
        </p>
      </div>
    </div>
  );
};

export default RockClimbing;
