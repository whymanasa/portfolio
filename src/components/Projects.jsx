import React from "react"
import "../styles/projects.css"
import neko from "../assets/neko.png";
import swap from "../assets/swap.png";
import preety from "../assets/preety.png";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

function Projects() {
  const projects = [
    {
      id: 1,
      title: "AI-Powered Upcycling Assistant",
      description:
        "Neko is an AI-powered upcycling assistant that transforms waste into creativity! Just snap a picture or enter an item’s name, and it suggests practical, stylish, and sustainable ways to repurpose it—tailored to your style. The final product i was able to make is something that makes me feel like i could do a little more towards the world. ",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "OpenAI"],
      image: neko,
      github: "https://github.com/whymanasa/sustain",
      live: "https://sustain-production.up.railway.app/",
    },
    {
      id: 2,
      title: "SWAP'em",
      description:
        "Want to learn new skills and meet new people? SWAP'em allows you to exchange your skills for a new skill (a cool barter system if i have to say).  This was my first time working with the backend, I used firebase for authentication and real-time database updates.I had a lot of fun making it with my friends and made me curious about backend development",
      technologies: ["React", "Firebase"],
      image: swap,
      github: "https://github.com/whymanasa/Swap_skills",
      live: "",
    },
    {
      id: 3,
      title: "Preety Pretty Salon",
      description:
        "A mockup website for a small startup. It shows the services offered by the startup beautifully and allows users to order the services. This was my first time working with Reactjs and it was challenging to say the least. The freedom to build whatever i want is why i first started web development, and feel like this is the best example to show that.",
      technologies: ["React", "Javascript"],
      image: preety,
      github: "https://github.com/whymanasa/pps",
      live: "",
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


