
import React from "react";
import { useState } from "react";
import GithubIcon from "../../public/git.svg"
import LiveIcon from "../../public/live.svg"
import Image from "next/image";
import Link from "next/link";

export type IProjectCard = {
  name: string | "Unknown";
  duration: string | "Unknown";
  description: string[];
  keywords: string[];
  links: {
    github: string;
    live: string;
  };
};

function ProjectCard(props: { prop: IProjectCard }) {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow((prev) => !prev);
  };

  return (
    <div className="w-full flex flex-col">
      <div
        className="flex justify-between border-b-[1px] border-[#29292b] p-4"
        onClick={handleClick}
      >
        <div className="flex flex-col ">
          <h1 className="font-roboto font-semibold text-2xl">
            {props.prop.name}
          </h1>
          <div className="flex gap-2 text-[#585858] text-sm">
            <h1>{props.prop.duration}</h1>
          </div>
        </div>
        <div className="flex gap-2 items-center justify-center">
          {
            props.prop.links.live && (
              <Link href={props.prop.links.live}>
                <Image src={LiveIcon} alt="" className="h-5 w-5"/>
              </Link>
            )
          }
          {
            props.prop.links.github && (
              <Link href={props.prop.links.github}>
                <Image src={GithubIcon} alt="" className="h-5 w-5"/>
              </Link>
            )
          }
          <button  className="text-[#585858] relative ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={` h-4 w-4   transition-all duration-1000 ease-in-out ${
                show ? "opacity-0" : "opacity-100"
              }`}
            >
              <path d="M7 20L12 15L17 20"></path>
              <path d="M7 4L12 9L17 4"></path>
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`h-4 w-4 absolute inset-0 transition-all duration-1000 ease-in-out ${
                !show ? "opacity-0" : "opacity-100"
              }`}
            >
              <path d="M7 15L12 20L17 15"></path>
              <path d="M7 9L12 4L17 9"></path>
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`w-full flex flex-col gap-2 pl-[60px] pr-4 overflow-hidden transition-all duration-1000 ease-in-out ${
          show ? "max-h-[1200px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="list-disc pl-6 marker:text-[#585858] marker:text-sm mt-3">
          {props.prop.description.map((desc, index) => (
            <li key={index}>{desc}</li>
          ))}
        </ul>
        <div className="w-full h-fit flex gap-2 my-1 mb-5  flex-wrap">
          {props.prop.keywords.map((item, index) => (
            <span
              className="text-[#7c7b7b] text-sm border  px-1 rounded-sm"
              key={index}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
