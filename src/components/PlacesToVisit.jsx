import React from "react";

const ThreeDots = () => {
  return (
    <div className="flex flex-col gap-1">
      <div className="size-1 bg-lAccent rounded-full"></div>
      <div className="size-1 bg-lAccent rounded-full"></div>
      <div className="size-1 bg-lAccent rounded-full"></div>
    </div>
  );
};
const PlacesToVisit = () => {
  return (
    <div className="px-20 py-20 ">
      <h1 className="text-3xl font-sans font-bold uppercase">
        Places to visit<br></br>in autumn
      </h1>
      <div className="flex gap-8 items-center justify-center px-4 py-20">
        <div className="flex flex-col gap-10 justify-center items-center relative">
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
            <ThreeDots />
          </div>
          <img
            src="/images/mountains.jpg"
            alt="mountains"
            className="size-56 rounded-full object-center object-cover "
          />
          <div className="flex flex-col gap-4 p-2">
            <h2 className="text-2xl font-sans font-semibold capitalize">
              mountain loop
            </h2>
            <p className="text-base font-sans font-medium opacity-70 line-clamp-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
              rerum minima unde architecto temporibus repudiandae eum explicabo,
              eius laudantium iusto, similique quaerat reprehenderit voluptate
              ea esse dolorem numquam? Maiores, corrupti.
            </p>
            <div className="w-full h-1 bg-lAccent rounded-sm"></div>
            <div>
              <div className="flex gap-2 items-center">
                <h3 className="text-lg font-sans font-semibold">Location</h3>
                <h4 className="text-lg font-sans font-regular opacity-70">
                  0.3 miles.
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10 justify-center items-center relative">
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
            <ThreeDots />
          </div>
          <img
            src="/images/national-park.jpg"
            alt="national-park"
            className="size-56 rounded-full object-center object-cover "
          />
          <div className="flex flex-col gap-4 p-2">
            <h2 className="text-2xl font-sans font-semibold capitalize">
              national park
            </h2>
            <p className="text-base font-sans font-medium opacity-70 line-clamp-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
              rerum minima unde architecto temporibus repudiandae eum explicabo,
              eius laudantium iusto, similique quaerat reprehenderit voluptate
              ea esse dolorem numquam? Maiores, corrupti.
            </p>
            <div className="w-full h-1 bg-lAccent rounded-sm"></div>
            <div>
              <div className="flex gap-2 items-center ">
                <h3 className="text-lg font-sans font-semibold">Location</h3>
                <h4 className="text-lg font-sans font-regular opacity-70">
                  0.3 miles.
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10 justify-center items-center relative">
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
            <ThreeDots />
          </div>

          <img
            src="/images/canyon.jpg"
            alt="canyon"
            className="size-56 rounded-full object-center object-cover "
          />
          <div className="flex flex-col gap-4 p-2">
            <h2 className="text-2xl font-sans font-semibold capitalize">
              canyon trail
            </h2>
            <p className="text-base font-sans font-medium opacity-70 line-clamp-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
              rerum minima unde architecto temporibus repudiandae eum explicabo,
              eius laudantium iusto, similique quaerat reprehenderit voluptate
              ea esse dolorem numquam? Maiores, corrupti.
            </p>
            <div className="w-full h-1 bg-lAccent rounded-sm"></div>
            <div>
              <div className="flex gap-2 items-center ">
                <h3 className="text-lg font-sans font-semibold">Location</h3>
                <h4 className="text-lg font-sans font-regular opacity-70">
                  0.3 miles.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-2 flex justify-center items-center ">
        <button className="px-16 py-1 border-2 rounded-sm border-lAccent text-base font-sans font-medium m-auto">
          see more
        </button>
      </div>
    </div>
  );
};

export default PlacesToVisit;
