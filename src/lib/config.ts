import LinkedInIcon from "../../public/linkedIn.svg"
import EmailIcon from "../../public/email.svg"
import GithubIcon from "../../public/github.svg"
import XIcon from "../../public/x.svg"

const config = {
    resumeUrl:"https://drive.google.com/file/d/1VBOgo4aNaxZ9uNzC5y0Om1pZQJfqWXjj/preview"
}

// social url 

const socialUrl = [
    {   
        id:1,
        text:"Github",
        iconUrl:GithubIcon,
        link:"https://github.com/thisisayushverma"
    },
    {   
        id:2,
        text:"Linkedin",
        iconUrl:LinkedInIcon,
        link:"https://www.linkedin.com/in/devayushverma/"
    },
    {   
        id:3,
        text:"X",
        iconUrl:XIcon,
        link:"https://x.com/esayushverma"
    },
    {
        id:4,
        text:"Email",
        iconUrl:EmailIcon,
        link:"ayushverma7052515243@gmail.com"
    }
]


export {
    socialUrl
}

export default config