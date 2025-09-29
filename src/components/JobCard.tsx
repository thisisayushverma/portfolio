import React from 'react'
import Image from 'next/image'
import RoleCard, { IRole } from './RoleCard'

type IJobs = {
    id:number,
    company_logo:string,
    company:string,
    position:IRole[],

}

function JobCard(props: IJobs) {
  return (
    <div className='w-full flex flex-col gap-1 p-3  border-[#29292b]'>
        <div className='w-full flex gap-3 '>
            <Image src={props.company_logo} width={50} height={50} alt="company logo" className='h-6 w-6'/>

            <h1 className='font-roboto font-semibold text-2xl'>
                {props.company}
            </h1>
        </div>
        <div className='w-full flex flex-col'>
            {
                props.position.map((pos,index) => (
                    <RoleCard key={index} prop={pos} last={index===props.position.length-1}/>
                ))
            }
        </div>
    </div>
  )
}

export default JobCard
