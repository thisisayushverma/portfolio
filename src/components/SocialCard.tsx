import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

function SocialCard(props: {text: string,iconUrl: string,link:string}) {
    
  return (
    <div>
        <Link href={props.link}>
            <Image src={props.iconUrl} alt={props.text} className='h-8 w-8'/>
        </Link>
    </div>
  )
}

export default SocialCard
