import React from "react";

const Header = () => {
  return (
    <div className="flex gap-24 m-auto items-center bg-primary ">
      <div className="flex gap-3 items-center">
        <img
          src="/images/logo.jpg"
          alt="logo"
          className="size-14 object-center object-cover rounded-full"
          style={{}}
        />
        <h3 className="text-white font-bold capitalize text-2xl font-mono">
          Hiking life
        </h3>
      </div>

      <div className="flex gap-6 items-center">
        <h3 className="text-white font-medium capitalize text-xl">Home</h3>
        <h3 className="text-white font-medium capitalize text-xl">Class</h3>
        <h3 className="text-white font-medium capitalize text-xl">Promo</h3>
        <h3 className="text-white font-medium capitalize text-xl">
          Online class
        </h3>
        <h3 className="text-white p-5 font-medium capitalize text-xl">
          Contact
        </h3>
      </div>
    </div>
  );
};

export default Header;
