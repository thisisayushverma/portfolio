"use client";
import MainHeader from "@/components/MainHeader";
import Resume from "@/components/Resume";

export default function Home() {
  return (
    <>
      <div className="flex flex-col w-full  justify-center  
      items-center border-b-[1px] border-[#29292b]">
        <MainHeader/>
        <Resume/>
      </div>
    </>
  );
}
