import React from "react";

const TheAsanas = () => {
  return (
    <div className="relative">
      <img
        src="/images/hiking.jpg"
        alt="mountaineering"
        className="w-full h-96 object-cover brightness-50"
      />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-6 text-center">
        <h1 className="text-white uppercase font-semibold text-2xl font-mono">
          the asanas purify our body and keep it healthy, making it suitable
          vehicle for our soul.
        </h1>
        <div className="flex justify-center items-center ">
          <button className="px-6 py-2 border-2 rounded-sm border-lAccent text-base uppercase font-medium m-auto text-white">
            see more
          </button>
        </div>
      </div>
    </div>
  );
};

export default TheAsanas;
