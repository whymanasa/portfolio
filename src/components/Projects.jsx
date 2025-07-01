import React from "react"
import "../styles/projects.css"
import neko from "../assets/neko.png";
import swap from "../assets/swap.png";
import preety from "../assets/preety.png";
import builtForMe from "../assets/Hex- Built.png";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

function Projects() {
  const projects = [
    
    {
      id: 1,
      title: "Built For Me- Hex Ed localizer",
      description:
      "Built a web-based platform to localize and culturally adapt educational content into Southeast Asian languages using Azure OpenAI and Azure Translator. Enabled students to input or upload course material, then receive culturally relevant translations and concise summaries. Integrated personalized quizzes with AI-driven, localized feedback to improve engagement and retention. Supported offline downloads in multiple formats, enhancing accessibility for low-bandwidth learners.",
      technologies: ["React.js", "Node.js", "Express", "AzureOpenAI"],
      image: builtForMe,
      github: "https://github.com/whymanasa/hedex-deploy-clean",
      live: "https://hedex-deploy-clean.onrender.com/",
    },
    {
      id: 2,
      title: "AI-Powered Upcycling Assistant",
      description:
        "Neko is an AI-powered upcycling assistant that transforms waste into creativity! Just snap a picture or enter an item’s name, and it suggests practical, stylish, and sustainable ways to repurpose it—tailored to your style. The final product i was able to make is something that makes me feel like i could do a little more towards the world. ",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "OpenAI"],
      image: neko,
      github: "https://github.com/whymanasa/sustain",
      live: "https://youtu.be/4uq-ZfN8jQI?si=qPiQF0gcyYzST411",
    },
    {
      id: 3,
      title: "SWAP'em",
      description:
        "Want to learn new skills and meet new people? SWAP'em allows you to exchange your skills for a new skill (a cool barter system if i have to say).  This was my first time working with the backend, I used firebase for authentication and real-time database updates.I had a lot of fun making it with my friends and made me curious about backend development",
      technologies: ["React", "Firebase"],
      image: swap,
      github: "https://github.com/whymanasa/Swap_skills",
      live: "https://youtu.be/qGClhUlwKDg?si=zRGJgTf2sCof19We",
    },
    {
      id: 4,
      title: "Preety Pretty Salon",
      description:
        "A mockup website for a small startup. It shows the services offered by the startup beautifully and allows users to order the services. This was my first time working with Reactjs and it was challenging to say the least. The freedom to build whatever i want is why i first started web development, and feel like this is the best example to show that.",
      technologies: ["React", "Javascript"],
      image: preety,
      github: "https://github.com/whymanasa/pps",
      live: "https://pps-five.vercel.app/",
    },
  ]

  return (
    <div className="projects-container">
      <div className="projects-content">
        <h1 className="projects-title">My Projects</h1>
        <p className="projects-subtitle">Here are some of my recent works</p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-image-container">
                <img src={project.image || "/placeholder.svg"} alt={project.title} className="project-image" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FaGithub /> Code
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FaExternalLinkAlt /> Live
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-details">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span className="tech-tag" key={index}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects


