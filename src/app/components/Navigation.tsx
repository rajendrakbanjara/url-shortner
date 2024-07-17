//import packages
import Image from "next/image";
import React, { useState } from "react";
import { Poppins } from "next/font/google";
import { HiMiniBars3 } from "react-icons/hi2";
import ShortUrl from "./ShortUrl";
//google font
const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "700"],
});

//functional component
const Navigation = () => {
  const [isMenuShow, setIsMenuShow] = useState(false);
  const toggleMenu = () => {
    setIsMenuShow(!isMenuShow);
  };

  return (
    <>
      <div className="flex justify-between items-center px-6 pt-10">
        {/* left content - name*/}
        <div className="font-bold text-4xl">Shortly</div>
        {/* right content - colaps manu*/}
        <div onClick={toggleMenu}>
          <HiMiniBars3 size={35} />
        </div>

        {/* toggle menu */}
        {isMenuShow && (
          <div
            className="DropDownMenu absolute lg:hidden left-0 right-0 mx-5 top-28 text-white font-bold text-lg space-y-6 rounded-lg py-8 px-6 z-40"
            style={{ backgroundColor: "hsl(257, 27%, 26%)" }}
          >
            <p className="flex justify-center">Features</p>
            <p className="flex justify-center">Pricing</p>
            <p className="flex justify-center">Resources</p>
            <hr />
            <p className="flex justify-center">Login</p>
            <p
              className="flex justify-center rounded-full p-2"
              style={{ backgroundColor: "hsl(180, 66%, 49%)" }}
            >
              Sign Up
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Navigation;
