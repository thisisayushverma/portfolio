import React from "react";
import ProjectCard from "./ProjectCard";
import { projectList } from "@/lib/config";

function ProjectComp() {


  return (
    <div className="w-full flex justify-center border-b-[1px]  border-[#29292b] ">
      <div className="w-full max-w-[800px] flex flex-col border-r-[1px] border-l-[1px]  border-[#29292b] ">
        <h1 className=" p-1 px-4 font-roboto font-bold text-3xl border-b-[1px] border-[#29292b]">Project</h1>

        <div className="w-full">
          {
            projectList.map((project) => {
              console.log(project);
              const {id,...rest} = project
              return <ProjectCard key={id} prop={rest} />
            })
          }
        </div>
      </div>
    </div>
  );
}

export default ProjectComp;
