'use client'
import React, { useEffect, useRef, useState } from "react";

function Navbar() {
const [logoVisible,setLogoVisible] = useState(false);
  const handleScroll = ()=>{
    if(window.scrollY>130){
      setLogoVisible(true);
    }
    else{
      setLogoVisible(false);
    }
  }

  useEffect(()=>{
    window.addEventListener('scroll',handleScroll)

    return ()=>{
      window.removeEventListener('scroll',handleScroll)
    }

  },[])


  return (
    <div className="flex w-full justify-center border-t-[1px] backdrop-blur-3xl border-b-[1px]  border-[#29292b] sticky top-0 z-1">
      <div className="flex gap-2 w-[800px] justify-between border-r-[1px] border-l-[1px] border-[#29292b] p-2">
        <div className={`font-libertinus  transition-all duration-500 ${logoVisible ? 'translate-y-0 opacity-100':'translate-y-2 opacity-0'}  text-3xl text-white `}>AV</div>
        <div>
          <ul className="flex gap-2 text-lg text-[#585858] font-[300]">
            <li>Home</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
