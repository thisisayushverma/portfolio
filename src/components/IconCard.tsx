import Image from "next/image";
import Link from "next/link";
import React from "react";

export type IconCardProps = {
  icon: string;
  link: string;
};

function IconCard(props: IconCardProps) {
  return (
      <Link
        href={props.link}
        className="w-12 h-12 relative hover:scale-110 transition-transform"
      >
        <Image src={props.icon} alt="" fill className="object-contain" />
      </Link>
    
  );
}

export default IconCard;
