import React from "react";

const Park = () => {
  return (
    <div className="relative">
      <img
        src="/images/hiking.jpg"
        alt="mountaineering"
        className="w-full h-96 object-cover brightness-50"
      />
      <div className="absolute text-white left-36 top-1/2 -translate-y-1/2 flex flex-col gap-6 text-left">
        <div className="w-max">
          <h1 className="font-funky font-extrabold text-4xl uppercase">
            Big bend national park
          </h1>
          <h1 className="font-funky font-extrabold text-4xl uppercase">
            {" "}
            hiking guide
          </h1>
        </div>
        <div>
          <h3 className="font-sans font-semibold text-xl uppercase">
            This hike is the next best
          </h3>
          <h3 className="font-sans font-semibold text-xl uppercase">option.</h3>
        </div>
        <div>
          <p className="font-sans font-medium text-lg uppercase">
            Lorem ipsum{" "}
          </p>
        </div>
        <div className="justify-start items-left ">
          <button className="px-6 py-2 border-2 rounded-sm border-lAccent text-base uppercase font-sans font-medium m-auto text-white">
            see more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Park;
