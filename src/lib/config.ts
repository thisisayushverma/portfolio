import LinkedInIcon from "../../public/linkedIn.svg"
import EmailIcon from "../../public/email.svg"
import GithubIcon from "../../public/github.svg"
import XIcon from "../../public/x.svg"
import CodeIcon from "../../public/code.svg"

const config = {
    resumeUrl: "https://drive.google.com/file/d/1VBOgo4aNaxZ9uNzC5y0Om1pZQJfqWXjj/preview"
}

// social url 

const socialUrl = [
    {
        id: 1,
        text: "Github",
        iconUrl: GithubIcon,
        link: "https://github.com/thisisayushverma"
    },
    {
        id: 2,
        text: "Linkedin",
        iconUrl: LinkedInIcon,
        link: "https://www.linkedin.com/in/devayushverma/"
    },
    {
        id: 3,
        text: "X",
        iconUrl: XIcon,
        link: "https://x.com/esayushverma"
    },
    {
        id: 4,
        text: "Email",
        iconUrl: EmailIcon,
        link: "ayushverma7052515243@gmail.com"
    }
]


// experince array 
const expList = [
    {
        id: 1,
        company_logo: "https://www.cgwb.gov.in/sites/default/files/inline-files/logo_1.jpg",
        company: "Central Ground Water Board",
        position: [
            {
                icon: CodeIcon,
                job_type: "Remote",
                role: "Software Engineer",
                duration: " Jul 2023 – Jan 2024",
                description: [
                    " Developed a user-friendly web interface with a searchable database. It has a captivating visual representation of data in the form of graphs and maps.",
                    "Implemented a dual-layered spatial map depicting aquifer and river basin data.",
                    "Implemented a secure admin panel with restricted access to secure industry personnel.",
                    "MySQL and PHP are usedfor user database creation and management to provide data security.",
                    "Integrated data visualization tool into the Central Ground Water Board’s analytics system, empowering stakeholders with real-time insights into groundwater isotope data, pattern identification, and optimizing work efficiency by 70%.",
                ],
                keywords: [
                    "PHP", "SQL", "JavaScript", "HTML", "CSS", "Bootstrap 5", "Google Maps API", "LeafletJs", " PlotlyJs"
                ]
            }
        ]
    },
]

//  project
const projectList = [
    {
        id: 1,
        name: "Onmeet",
        duration: "Aug-2025 - Present",
        description: [
            "Built a real-time meeting app where users can create rooms and independently enable/disable camera, microphone, and screen sharing.",
            "Implemented SFU (Selective Forwarding Unit) architecture to optimize multi-user video calls and avoid peer-to-peer mesh overhead.",
            "Used Socket.IO for signaling to manage session setup, ICE candidate exchange, and peer connections.",
            "Added HLSstreaming support to allow users to broadcast meetings live for non-participants.",
            "Integrated STUN/TURN servers to ensure reliable connectivity across diverse network conditions."
        ],
        keywords: [
            "Nodejs", "Socket.io", "Webrtc", "SFU", "HLS","Reactjs", "Tailwindcss","EC2"
        ],
        links:{
            github:"https://github.com/thisisayushverma/mediasoup-meeting-app",
            live:"https://onmeet.ayushverma.dev/"
        }
    },
    {
        id:2,
        name:"Musify",
        duration:"April-2025 - Present",
        description:[
            " Designed and developed a full-stack music streaming platform enabling users to upload, stream, and manage audio files.",
            " Implemented adaptive bitrate streaming with FFmpeg to optimize playback quality across varying network conditions.",
            "Built RESTful APIs with Node.js and Express.js for authentication, file uploads, and user interactions, secured with email OTP verification.",
            "Improved content discoverability in Musify by implementing fuzzy search, handling typos and partial matches to deliver accurate results.",
            "Integrated AWS S3 for scalable storage and AWS CloudFront for fast, global content delivery, restricted access,ensuring audio files are securely delivered only through the platform.",
            "Utilized MongoDB for managing user accounts, playlists, and engagement data with efficient queries.",
            "Applied background processing with queues (Bull/SQS) for seamless audio conversion and file handling."
        ],
        keywords:["Nodejs", "Expressjs", "MongoDB","AWS S3", "AWS CloudFront", "FFmpeg","HLS" , "AWS SQS", "Bull Queue", "Tailwindcss", "Reactjs", "Nodemailer", "JWT Token", "Redux",],
        links:{
            github:"https://github.com/thisisayushverma/musify-app",
            live:"https://musify.ayushverma.dev/"
        }
    }
]

export {
    socialUrl,
    expList,
    projectList
}

export default config