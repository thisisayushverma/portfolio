import { expList } from "@/lib/config";
import React from "react";
import JobCard from "./JobCard";

function Experience() {
  return (
    <div className="w-full flex justify-center border-b-[1px]  border-[#29292b] ">
      <div className="w-full max-w-[800px] flex flex-col border-r-[1px] border-l-[1px]  border-[#29292b] ">
        <h1 className=" p-1 px-4 font-roboto font-bold text-3xl border-b-[1px] border-[#29292b] ">Experience</h1>

        <div className="w-full">
          {expList.map((exp) => (
            <JobCard key={exp.id} {...exp} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
