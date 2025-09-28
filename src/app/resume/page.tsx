"use client";
import React from "react";
import config from "@/lib/config";

export default function Resume() {
  return (
    <div
      className="flex flex-col w-full  justify-center  
        items-center border-b-[1px] border-[#29292b] "
    >
      <div className="w-full flex justify-center">
        <div className=" w-[800px]  flex flex-col gap-3 p-3 font-medium justify-between items-center border-r-[1px] border-l-[1px] border-[#29292b]">
          <h1 className="font-bold text-center font-mono text-4xl text-white border-b-[1px]">
            Resume
          </h1>

          <div className="w-full h-screen p-1 flex">
            <iframe src={config.resumeUrl} className="w-full h-full rounded-lg shadow " />
          </div>
        </div>
      </div>
    </div>
  );
}
