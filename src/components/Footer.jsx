import React from "react";

const Footer = () => {
  return (
    <footer className="grid grid-cols-2 gap-24 p-24 border-b-15 border-lAccent">
      <div className="flex flex-col justify-center gap-6">
        <h3 className="uppercase text-xl font-sans font-semibold">about</h3>
        <p className="opacity-70 font-sans font-medium text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, quam
          reiciendis aliquid totam eaque at ullam ratione enim aspernatur, ut
          voluptas.
        </p>
        <div className="flex gap-3 items-center">
          <img
            src="/images/mountain.svg"
            alt="logo"
            className="size-10 object-center object-cover "
            style={{}}
          />
          <h3 className="text-lAccent capitalize text-3xl font-sans">
            Hiking
            <span className="text-lAccent font-bold capitalize text-3xl font-sans">
              life
            </span>
          </h3>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6 pt-12">
        <div className="flex flex-col gap-6">
          <h3 className="uppercase text-xl font-sans font-semibold">about</h3>
          <div>
            <p className="capitalize text-lg font-sans font-medium opacity-60">
              team
            </p>
            <p className="capitalize text-lg font-sans font-medium opacity-60">
              join us
            </p>
            <p className="capitalize text-lg font-sans font-medium opacity-60">
              ethics
            </p>
            <p className="capitalize text-lg font-sans font-medium opacity-60">
              goals
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h3 className="uppercase text-xl font-sans font-semibold">about</h3>
          <div>
            <p className="capitalize text-lg font-sans font-medium opacity-60">
              team
            </p>
            <p className="capitalize text-lg font-sans font-medium opacity-60">
              join us
            </p>
            <p className="capitalize text-lg font-sans font-medium opacity-60">
              ethics
            </p>
            <p className="capitalize text-lg font-sans font-medium opacity-60">
              goals
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h3 className="uppercase text-xl font-sans font-semibold">about</h3>
          <div>
            <p className="capitalize text-lg font-sans font-medium opacity-60">
              team
            </p>
            <p className="capitalize text-lg font-sans font-medium opacity-60">
              join us
            </p>
            <p className="capitalize text-lg font-sans font-medium opacity-60">
              ethics
            </p>
            <p className="capitalize text-lg font-sans font-medium opacity-60">
              goals
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
