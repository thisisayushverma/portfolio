import { socialUrl } from "@/lib/config";
import Link from "next/link";
import React from "react";
import Quote from "./Quote";

function Footer() {
  return (
    <div className="w-full flex justify-center border-b-[1px] border-[#29292b]">
      <div className="w-full max-w-[800px] flex justify-center border-l-[1px] border-r-[1px] border-[#29292b]">
        <div className="w-full flex flex-col p-4 items-center ">
          <h1>
            Inspired by <Link href={"https://chanhdai.com/"} className="underline"> ncdai</Link>{". "}
          </h1>
          <h1>

            Built by <Link href={socialUrl[2].link} className="underline">
             ayushverma 
            </Link>. The source code is available on <Link className="underline" href={"https://github.com/thisisayushverma/portfolio"}>
            GitHub</Link>.
          </h1>
        </div>
        {/* <Quote/> */}
      </div>
    </div>
  );
}

export default Footer;
