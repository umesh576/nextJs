import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full py-3 px-5  bg-blue-400">
      <div className="flex gap-20">
        <Link
          href={"/"}
          className="text-lg text-white font-extrabold hover:text-black hover:bg-blue-300 p-1  border-2 bg-blue-600"
        >
          Home
        </Link>
        <Link
          href={"/login"}
          className="text-lg text-white font-extrabold hover:text-black hover:bg-blue-300 p-1  border-2 bg-blue-600"
        >
          Login
        </Link>
        <Link
          href={"/signup"}
          className="text-lg text-white font-extrabold hover:text-black hover:bg-blue-300 p-1  border-2 bg-blue-600"
        >
          signup
        </Link>
        <Link
          href={"/form"}
          className="text-lg text-white font-extrabold hover:text-black hover:bg-blue-300 p-1  border-2 bg-blue-600"
        >
          form
        </Link>
        <Link
          href={"/random"}
          className="text-lg text-white font-extrabold hover:text-black hover:bg-blue-300 p-1  border-2 bg-blue-600"
        >
          Random
        </Link>
        <Link
          href={"/admin"}
          className="text-lg text-white font-extrabold hover:text-black hover:bg-blue-300 p-1  border-2 bg-blue-600"
        >
          admin
        </Link>
        <Link
          href={"/cloudinary"}
          className="text-lg text-white font-extrabold hover:text-black hover:bg-blue-300 p-1  border-2 bg-blue-600"
        >
          cloudinary
        </Link>
        <Link
          href={"/yCloudinary"}
          className="text-lg text-white font-extrabold hover:text-black hover:bg-blue-300 p-1  border-2 bg-blue-600"
        >
          yCloudinary
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
