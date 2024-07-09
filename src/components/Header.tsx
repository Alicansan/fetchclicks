"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaPlayCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import SearchBar from "./SearchBar";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const [query, setQuery] = useState("");

  async function handleSearch(e: any) {
    e.preveventDefault();
  }

  return (
    <header className="relative z-50 flex flex-row overflow-hidden bg-persianred px-2 font-bebas md:mx-auto md:h-full md:w-full">
      {/* Sidebar */}
      <div className="fixed">
        <div
          onClick={handleClick}
          className="left-0 top-0 flex h-12 w-12 flex-col items-center justify-center bg-transparent hover:cursor-pointer md:hidden"
        >
          <button>
            <div className="relative">
              <span
                className={`my-0.5 block h-0.5 w-6 rounded-sm bg-champagnepink transition-all duration-300 ease-out ${
                  isOpen ? "translate-y-1 rotate-45" : "-translate-y-0.5"
                } `}
              ></span>
              <span
                className={`my-0.5 block h-0.5 w-6 rounded-sm bg-champagnepink transition-all duration-300 ease-out ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`my-0.5 block h-0.5 w-6 rounded-sm bg-champagnepink transition-all duration-300 ease-out ${
                  isOpen ? "-translate-y-1 -rotate-45" : "translate-y-0.5"
                } `}
              ></span>
            </div>
          </button>
        </div>
        <div
          className={`flex- fixed left-0 top-0 -z-10 h-[2000px] flex-col bg-persianred px-12 pt-20 md:hidden ${
            isOpen
              ? "duration-300 ease-out"
              : "-translate-x-60 duration-300 ease-in"
          }`}
        >
          <nav className="mt-10 flex flex-col items-center text-2xl">
            <Link href={"/"}>Trending</Link>
            <Link href={"/"}>Top Rated</Link>
            <Link href={"/"}>Series</Link>
            <div className="mt-2">
              <SearchBar />
            </div>
          </nav>
        </div>
      </div>
      {/* Sidebar */}

      <div className="my-1.5 flex w-full flex-row justify-center gap-12 text-2xl lg:justify-evenly">
        <Link href={`${isOpen ? "" : "/"}`} className="flex items-center gap-2">
          <FaPlayCircle className=" " />
          <p className="relative mt-1 inline align-middle text-2xl font-semibold tracking-[2px] [text-shadow:_5px_5px_0_rgb(0_0_0_/_90%)]">
            FETCHCLICKS
          </p>
        </Link>
        <div className="hidden md:block">
          {/* SEARCH */}
          <SearchBar />
        </div>
        <nav className="ml-2 mt-3 hidden gap-5 md:flex">
          <Link
            href={"/"}
            className="[text-shadow:_5px_5px_0_rgb(0_0_0_/_90%)]"
          >
            Trending
          </Link>
          <Link
            href={"/"}
            className="text-nowrap [text-shadow:_5px_5px_0_rgb(0_0_0_/_90%)]"
          >
            Top Rated
          </Link>
          <Link
            href={"/"}
            className="[text-shadow:_5px_5px_0_rgb(0_0_0_/_90%)]"
          >
            Series
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
