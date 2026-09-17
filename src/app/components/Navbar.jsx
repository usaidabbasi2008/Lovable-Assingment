
"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "@/app/Assets/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Solution", href: "/navagition/Solution" },
    { name: "Resources", href: "/navagition/Resources" },
    { name: "Community", href: "/navagition/Community" },
    { name: "Enterprise", href: "/navagition/Enterprise" },
    { name: "Pricing", href: "/navagition/Pricing" },
    { name: "Security", href: "/navagition/Security" },
  ];

  return (
    <nav className="sticky top-0 z-50  mb-4  w-full bg-gray-100/95 backdrop-blur-md border-b border-gray-200">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= DESKTOP / MAIN NAV ================= */}
        <div className="flex items-center justify-between h-20">

          {/* LOGO */}
          <Link
            href="/"
            className="shrink-0 transition-transform duration-300 hover:scale-105"
          >
            <Image
              src={logo}
              alt="Logo"
              width={170}
              priority
              className="w-[140px] sm:w-[160px] md:w-[170px] h-auto"
            />
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-7">

            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="
                  relative py-2
                  text-gray-700
                  font-medium
                  transition-all
                  duration-300
                  hover:text-purple-600
                  hover:-translate-y-0.5

                  after:absolute
                  after:left-0
                  after:bottom-0
                  after:h-[2px]
                  after:w-0
                  after:rounded-full
                  after:bg-gradient-to-r
                  after:from-purple-500
                  after:to-pink-500
                  after:transition-all
                  after:duration-300

                  hover:after:w-full
                "
              >
                {link.name}
              </Link>
            ))}

          </div>

          {/* DESKTOP BUTTONS */}
          <div className="hidden lg:flex items-center gap-3">

            <Link
              href="/login"
              className="
                border-2
                border-gray-300
                bg-transparent
                hover:bg-gray-200
                hover:border-gray-400
                text-black
                font-semibold
                py-2.5
                px-5
                rounded-2xl
                transition-all
                duration-300
                hover:-translate-y-1
                active:scale-95
              "
            >
              Login
            </Link>

            <Link
              href="/get-started"
              className="
                border-2
                border-black
                bg-black
                hover:bg-gray-800
                text-white
                font-semibold
                py-2.5
                px-5
                rounded-2xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
                active:scale-95
              "
            >
              Get Started
            </Link>

          </div>

          {/* ================= MOBILE MENU BUTTON ================= */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="
              lg:hidden
              flex
              flex-col
              justify-center
              items-center
              gap-1.5
              w-11
              h-11
              rounded-xl
              border
              border-gray-300
              bg-white
              hover:bg-gray-200
              transition-all
              duration-300
            "
            aria-label="Toggle menu"
          >

            <span
              className={`
                block
                w-6
                h-0.5
                bg-black
                rounded-full
                transition-all
                duration-300
                ${menuOpen ? "rotate-45 translate-y-2" : ""}
              `}
            />

            <span
              className={`
                block
                w-6
                h-0.5
                bg-black
                rounded-full
                transition-all
                duration-300
                ${menuOpen ? "opacity-0" : "opacity-100"}
              `}
            />

            <span
              className={`
                block
                w-6
                h-0.5
                bg-black
                rounded-full
                transition-all
                duration-300
                ${menuOpen ? "-rotate-45 -translate-y-2" : ""}
              `}
            />

          </button>

        </div>

        {/* ================= MOBILE MENU ================= */}
        <div
          className={`
            lg:hidden
            overflow-hidden
            transition-all
            duration-500
            ease-in-out
            ${
              menuOpen
                ? "max-h-[500px] opacity-100 pb-6"
                : "max-h-0 opacity-0"
            }
          `}
        >

          <div className="flex flex-col gap-2 pt-2">

            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="
                  group
                  relative
                  px-4
                  py-3
                  rounded-xl
                  text-gray-700
                  font-medium
                  transition-all
                  duration-300
                  hover:bg-white
                  hover:text-purple-600
                  hover:pl-6
                "
                style={{
                  transitionDelay: menuOpen
                    ? `${index * 50}ms`
                    : "0ms",
                }}
              >
                {link.name}

                <span
                  className="
                    absolute
                    left-0
                    top-0
                    h-full
                    w-1
                    rounded-full
                    bg-gradient-to-b
                    from-purple-500
                    to-pink-500
                    scale-y-0
                    group-hover:scale-y-100
                    transition-transform
                    duration-300
                  "
                />
              </Link>
            ))}

            {/* MOBILE BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-3 mt-4 px-2">

              <Link
                href="/login"
                onClick={() => setMenuOpen(false)}
                className="
                  w-full
                  text-center
                  border-2
                  border-gray-300
                  bg-white
                  hover:bg-gray-200
                  text-black
                  font-semibold
                  py-3
                  rounded-2xl
                  transition-all
                  duration-300
                  active:scale-95
                "
              >
                Login
              </Link>

              <Link
                href="/get-started"
                onClick={() => setMenuOpen(false)}
                className="
                  w-full
                  text-center
                  border-2
                  border-black
                  bg-black
                  hover:bg-gray-800
                  text-white
                  font-semibold
                  py-3
                  rounded-2xl
                  transition-all
                  duration-300
                  active:scale-95
                "
              >
                Get Started
              </Link>

            </div>

          </div>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;


