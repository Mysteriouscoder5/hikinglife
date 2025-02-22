import React from "react";

const IceClimbing = () => {
  return (
    <div className="px-20 py-20 grid grid-cols-2 gap-16 bg-primary">
      <div className="flex flex-col gap-20 justify-center items-center text-center">
        <img
          src="/images/hiker.jpg"
          alt="hiker"
          className="size-80 object-cover object-center rounded-full "
        />
        <p className="text-lAccent font-semibold text-2xl uppercase font-mono">
          walking in the nature as a recreational activity
        </p>
      </div>
      <div>
        <h1 className="text-3xl font-bold uppercase text-white">
          Mountaineering<br></br>Ice Climbing
        </h1>
        <div className="my-10 flex flex-col justify-center items-start gap-6 text-white">
          <h3 className="font-semibold uppercase text-xl">2. Activities</h3>
          <p className="opacity-70 font-medium text-lg">
            Kundalini is the most classic yoga. Its origin is in the Raya Yoga
            of Patanjali and classical texts such as Bhagavad Gita and Hatha
            Yoga Pradipika
          </p>
          <div className="w-full h-1 bg-lAccent rounded-sm"></div>
          <h3 className="font-semibold text-lg opacity-60">
            17 modules<br></br> divided into 5 weeks
          </h3>
          <div className="flex gap-10 text-white">
            <p className="capitalize font-semibold text-xl">
              start<br></br> april 15 <br></br>20:00 hr
            </p>
            <p className=" capitalize font-semibold text-xl">
              price<br></br>$900
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IceClimbing;
