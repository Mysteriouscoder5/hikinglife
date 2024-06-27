import React from "react";

const TheAsanas = () => {
  return (
    <div className="relative">
      <img
        src="/images/hiking.jpg"
        alt="mountaineering"
        className="w-full h-96 object-cover brightness-50 "
      />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col text-center item-center justify-center">
        <h1 className="text-white uppercase font-funky font-semibold text-3xl">
          the asanas purify our body and
        </h1>
        <h1 className="text-white uppercase font-funky font-semibold text-3xl">
          keep it healthy, making it suita-
        </h1>
        <h1 className="text-white uppercase font-funky font-semibold text-3xl">
          ble vehicle for our soul.
        </h1>
        <div className="flex justify-center items-center ">
          <img
            src="/images/mountain.svg"
            alt="logo"
            className="size-20 object-center object-cover"
            style={{}}
          />
        </div>
        <div className="p-2 flex justify-center items-center ">
          <button className="px-16 py-1 border-2 rounded-sm border-lAccent text-white font-sans font-medium m-auto">
            see more
          </button>
        </div>
      </div>
    </div>
  );
};

export default TheAsanas;
