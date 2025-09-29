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
                    "HTML", "JavaScript", "CSS", "Bootstrap 5", "Google Maps API", "LeafletJs", " PlotlyJs libraries"
                ]
            }
        ]
    },
]

//  project


export {
    socialUrl,
    expList
}

export default config