import React, { useState } from "react";
import Image from "next/image";

export type IRole = {
  icon: string;
  role: string;
  duration: string;
  job_type: string;
  description: string[];
  keywords: string[];
};

type Props = {
  prop: IRole;
  last: boolean;
}

function RoleCard(props: Props) {
  const [show, setShow] = useState(false);
  console.log(props);
  
  const handleClick = () => {
    setShow((prev) => !prev);
  };


  return (
    <div className="w-full flex gap-1 items-stretch mt-2">
      {/* left column */}
      <div className="min-h-full flex flex-col items-center px-2 ">
        <div className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground border border-muted-foreground/15 ring-1 ring-edge ring-offset-1 
        ring-[#29292b]
        bg-[#27272a]
        ring-offset-background text-[#585858]">
          <Image
            src={props.prop.icon}
            alt=""
            className="h-4 w-4 object-fit"
          />
        </div>
        <div
          className={`flex-1 h-full ${
            props.last ? "hidden" : ""
          } w-[1px] border-[1px] border-[#29292b] mt-1`}
        ></div>
      </div>

      {/* right column */}
      <div className="w-full px-2 flex flex-col">
        <div className="flex justify-between">
          <div>
            <h1 className="font-bold">{props.prop.role}</h1>
            <div className="flex gap-2 text-[#585858] text-sm">
              <h1>{props.prop.job_type}</h1> |<h1>{props.prop.duration}</h1>
            </div>
          </div>
          <div>
            <button onClick={handleClick} className="text-[#585858] relative">
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
                className={`h-4 w-4  absolute top-0 left-0 inset-0 transition-all duration-1000 ease-in-out ${
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
          className={`w-full my-2 overflow-hidden transition-all duration-1000 ease-in-out ${
            show ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="list-disc pl-6 marker:text-[#585858] marker:text-sm ">
            {props.prop.description.map((desc, index) => (
              <li key={index}>{desc}</li>
            ))}
          </ul>
          <div className="w-full h-fit flex gap-2 my-1 flex-wrap">
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
    </div>
  );
}

export default RoleCard;
