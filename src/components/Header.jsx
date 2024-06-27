import React from "react";

const Header = () => {
  return (
    <div className="flex gap-24 m-auto items-center bg-primary ">
      <div className="flex gap-3 items-center">
        <img
          src="/images/mountain.svg"
          alt="logo"
          className="size-10 object-center object-cover"
          style={{}}
        />
        <h3 className="text-lAccent capitalize text-3xl font-sans">
          Hiking
          <span className="text-lAccent font-bold capitalize text-3xl font-sans ">
            life
          </span>
        </h3>
      </div>

      <div className="flex gap-6 items-center">
        <h3 className="text-white font-sans font-medium capitalize px-6">
          Home
        </h3>
        <h3 className="text-white font-sans font-medium capitalize px-6">
          Class
        </h3>
        <h3 className="text-white font-sans font-medium capitalize px-6">
          Promo
        </h3>
        <h3 className="text-white font-sans  font-medium capitalize px-6">
          Online class
        </h3>
        <h3 className="text-white font-sans font-medium capitalize px-6">
          Contact
        </h3>
      </div>
    </div>
  );
};

export default Header;
