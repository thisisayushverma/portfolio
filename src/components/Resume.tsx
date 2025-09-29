"use client";
import React from "react";
import Image from "next/image";
import resume from "../../public/resume.png";
import { useRouter } from "next/navigation";
import { socialUrl } from "@/lib/config";
import SocialCard from "./SocialCard";

function Resume() {
  const router = useRouter();

  const handleResume = () => {
    router.push("/resume");
  };

  const handleContactForm = () => {
    router.push("/contact");
  };

  return (
    <div className="w-full flex flex-col items-center justify-center   border-b-[1px]  border-[#29292b] ">
      <div className="w-full max-w-[800px] flex  flex-col gap-3 p-3 font-medium border-r-[1px] border-l-[1px] border-[#29292b]">
        <div className="w-full flex gap-3">
          <div
            className="p-1 px-2 flex gap-2 items-center  border-[#29292b] border-2 border-dashed rounded-md cursor-pointer hover:border-solid hover:animate-pulse"
            onClick={handleResume}
          >
            <Image src={resume} alt="resume" className="h-4 w-4 rotate-20" />
            Resume/ CV
          </div>

          <div
            className="p-1 px-2 border-[#29292b] border-2 flex gap-2 items-center rounded-md cursor-pointer  hover:border-solid hover:animate-pulse bg-[#29292b]"
            onClick={handleContactForm}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="h-4 w-4"
            >
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
            Contact Me
          </div>
        </div>

        <div className=" w-full flex gap-5 p-3 font-medium  border-[#29292b]">
          {socialUrl.map((item, index) => (
            <SocialCard
              key={index}
              text={item.text}
              iconUrl={item.iconUrl}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Resume;
