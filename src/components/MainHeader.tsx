'use client'
import React from "react";
import About from "./About";

function MainHeader() {

  return (
    <div className="w-[800px] p-5 pb-0 border-r-[1px] border-l-[1px] border-[#29292b] flex flex-col gap-5">
      <h1 className="font-libertinus text-5xl text-white">AV</h1>
      <div>
        <h1 className="font-roboto font-bold text-3xl text-white">Hi, I&apos;m Ayush</h1>
        <div className="w-fit flex">
        <h1 className="typing w-fit">
        — A Full Stack web developer.
        </h1>
        <div className="w-[10px] border-b-4 blink"></div>
        </div>
      </div>
      <About/>
    </div>
  );
}

export default MainHeader;
