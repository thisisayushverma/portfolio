import React from 'react'
import { techStack } from '@/lib/config'
import IconCard from './IconCard'


function TechStack() {
  return (
    <div className="w-full flex justify-center border-b-[1px]  border-[#29292b] ">
    <div className="w-full max-w-[800px] flex flex-col border-r-[1px] border-l-[1px]  border-[#29292b] ">
      <h1 className=" p-1 px-4 font-roboto font-bold text-3xl border-b-[1px] border-[#29292b]">Tech Stack</h1>

      <div className="w-full flex gap-5 p-6 flex-wrap">
        {
            techStack.map((tech,index) => (
                <IconCard key={index} icon={tech.icon} link={tech.link}/>
            ))
        }
      </div>
    </div>
  </div>
  )
}

export default TechStack