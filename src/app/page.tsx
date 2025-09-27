import About from "@/components/About";
import MainHeader from "@/components/MainHeader";
import Resume from "@/components/Resume";
import Image from "next/image";

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
