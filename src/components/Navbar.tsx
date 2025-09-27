import React from "react";

function Navbar() {
  return (
    <div className="flex w-full justify-center border-t-[1px] border-b-[1px] border-[#29292b]">
      <div className="flex gap-2 w-[800px] justify-between border-r-[1px] border-l-[1px] border-[#29292b] p-2">
        <div className="font-libertinus invisible text-3xl text-white ">AV</div>
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
