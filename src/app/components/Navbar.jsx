"use client"

import Image from "next/image";


import Link from "next/link";
import React from "react";

import logo from "@/app/Assets/logo.png";
import { useRouter } from "next/navigation";

function Navbar() {

  const router = useRouter();

  return (
    <div>
      <nav className="flex sticky top-0 justify-between items-center p-2  bg-gray-100">
        <div>
          {" "}
          <Image src={logo} alt="Logo" width={200} />{" "}
        </div>
        <div className="flex gap-4">
          <Link
            className="relative py-2 text-gray-700 transition-colors duration-300
    hover:text-purple-600
    after:absolute after:left-0 after:bottom-0
    after:h-[2px] after:w-0
    after:bg-gradient-to-r after:from-purple-500 after:to-pink-500
    after:transition-all after:duration-300
    hover:after:w-full"
            href="/navagition/Solution"
          >
            {" "}
            Solution{" "}
          </Link>
          <Link
            className="relative py-2 text-gray-700 transition-colors duration-300
    hover:text-purple-600
    after:absolute after:left-0 after:bottom-0
    after:h-[2px] after:w-0
    after:bg-gradient-to-r after:from-purple-500 after:to-pink-500
    after:transition-all after:duration-300
    hover:after:w-full"
            href="/navagition/Resources"
          >
            {" "}
            Resources{" "}
          </Link>
          <Link
            className="relative py-2 text-gray-700 transition-colors duration-300
    hover:text-purple-600
    after:absolute after:left-0 after:bottom-0
    after:h-[2px] after:w-0
    after:bg-gradient-to-r after:from-purple-500 after:to-pink-500
    after:transition-all after:duration-300
    hover:after:w-full"
            href="/navagition/Community"
          >
            {" "}
            Community{" "}
          </Link>
          <Link
            className="relative py-2 text-gray-700 transition-colors duration-300
    hover:text-purple-600
    after:absolute after:left-0 after:bottom-0
    after:h-[2px] after:w-0
    after:bg-gradient-to-r after:from-purple-500 after:to-pink-500
    after:transition-all after:duration-300
    hover:after:w-full"
            href="/navagition/Enterprise"
          >
            {" "}
            Enterprise{" "}
          </Link>
          <Link
            className="relative py-2 text-gray-700 transition-colors duration-300
    hover:text-purple-600
    after:absolute after:left-0 after:bottom-0
    after:h-[2px] after:w-0
    after:bg-gradient-to-r after:from-purple-500 after:to-pink-500
    after:transition-all after:duration-30<PASSWORD>"
            href="/navagition/Pricing"
          >
            {" "}
            Pricing{" "}
          </Link>
          <Link
            className="relative py-2 text-gray-700 transition-colors duration-300
    hover:text-purple-600
    after:absolute after:left-0 after:bottom-0
    after:h-[2px] after:w-0
    after:bg-gradient-to-r after:from-purple-500 after:to-pink-500
    after:transition-all after:duration-300
    hover:after:w-full"
            href="/navagition/Security"
          >
            {" "}
            Security{" "}
          </Link>
        </div>

        <div className="flex gap-4">
          <button  onClick={() => router.push('/login')}  className="bg-transparent border-2 hover:bg-gray-200 text-black font-bold py-2 px-4 rounded-2xl ">
            {" "}
            Login{" "}
          </button>
          <button className=" border-2 bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-2xl ">
            {" "}
            Get Started{" "}
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
