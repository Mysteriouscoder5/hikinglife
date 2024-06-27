import React from "react";

const Footer = () => {
  return (
    <footer className="grid grid-cols-2 gap-24 p-24 border-b-15 border-lAccent">
      <div className="flex flex-col justify-center gap-6">
        <h3 className="uppercase text-xl font-semibold">about</h3>
        <p className="opacity-70 font-medium text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, quam
          reiciendis aliquid totam eaque at ullam ratione enim aspernatur, ut
          voluptas, soluta accusamus iusto aperiam est quibusdam commodi sequi
          officia.
        </p>
        <div className="flex gap-3 items-center">
          <img
            src="/images/logo.jpg"
            alt="logo"
            className="size-14 object-center object-cover rounded-full"
            style={{}}
          />
          <h3 className="text-black font-bold capitalize text-2xl font-mono">
            Hiking life
          </h3>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6">
        <div className="flex flex-col gap-6">
          <h3 className="uppercase text-xl font-semibold">about</h3>
          <div>
            <p className="capitalize text-lg font-medium opacity-60">team</p>
            <p className="capitalize text-lg font-medium opacity-60">join us</p>
            <p className="capitalize text-lg font-medium opacity-60">ethics</p>
            <p className="capitalize text-lg font-medium opacity-60">goals</p>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h3 className="uppercase text-xl font-semibold">about</h3>
          <div>
            <p className="capitalize text-lg font-medium opacity-60">team</p>
            <p className="capitalize text-lg font-medium opacity-60">join us</p>
            <p className="capitalize text-lg font-medium opacity-60">ethics</p>
            <p className="capitalize text-lg font-medium opacity-60">goals</p>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h3 className="uppercase text-xl font-semibold">about</h3>
          <div>
            <p className="capitalize text-lg font-medium opacity-60">team</p>
            <p className="capitalize text-lg font-medium opacity-60">join us</p>
            <p className="capitalize text-lg font-medium opacity-60">ethics</p>
            <p className="capitalize text-lg font-medium opacity-60">goals</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
