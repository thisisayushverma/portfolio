"use client";
import BreakDiv from "@/components/BreakDiv";
import Experience from "@/components/Experience";
import MainHeader from "@/components/MainHeader";
import ProjectComp from "@/components/ProjectComp";
import Resume from "@/components/Resume";

export default function Home() {
  return (
    <>
      <div className="flex flex-col w-full  justify-center  
      items-center ">
        <MainHeader/>
        <BreakDiv/>
        <Resume/>
        <BreakDiv/>
        <Experience/>
        <BreakDiv/>
        <ProjectComp/>
      </div>
    </>
  );
}
