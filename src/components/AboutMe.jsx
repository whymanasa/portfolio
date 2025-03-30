import React from 'react';
import "../styles/AboutMe.css"
import { FaReact, FaDatabase, FaJs, FaJava, FaHtml5, FaCss3Alt } from "react-icons/fa"
import { SiNextdotjs, SiTailwindcss, SiFirebase, SiPython, SiC } from "react-icons/si"

function AboutMe() {
  const skills = {
    frontend: [
      { name: "React", icon: <FaReact className="skill-icon" />, level: 80 },
      { name: "Next.js", icon: <SiNextdotjs className="skill-icon" />, level: 75 },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="skill-icon" />, level: 80 },
      { name: "HTML", icon: <FaHtml5 className="skill-icon" />, level: 95 },
      { name: "CSS", icon: <FaCss3Alt className="skill-icon" />, level: 90 },
    ],
    languages: [
      { name: "Python", icon: <SiPython className="skill-icon" />, level: 90 },
      { name: "C", icon: <SiC className="skill-icon" />, level: 85 },
      { name: "JavaScript", icon: <FaJs className="skill-icon" />, level: 80 },
      { name: "Java", icon: <FaJava className="skill-icon" />, level: 60 },
    ],
    backend: [
      { name: "Firebase", icon: <SiFirebase className="skill-icon" />, level: 85 },
      { name: "MySQL", icon: <FaDatabase className="skill-icon" />, level: 80 },
    ],
  }

  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-title">Know Who I Am</h1>

        <div className="about-description">
          <p>
            Hi, I'm <span className="highlight">Manasa Yenimireddy</span>, a passionate web developer currently pursuing
            my engineering degree at XYZ. I love bringing ideas to life by turning concepts into functional,
            user-friendly websites. My recent project, an AI-powered sustainable upcycling assistant built with Next.js
            and TypeScript, reflects my enthusiasm for combining technology with impactful solutions.
          </p>
          <p>
            With expertise in <strong>Next.js, React.js, TypeScript, Python, and JavaScript</strong>, I enjoy solving
            coding challenges and continuously learning new technologies. Creativity and persistence drive me to build
            innovative and efficient web applications.
          </p>
          <p>
            I'm always eager to take on new challenges and collaborate on exciting projects.{" "}
            <span className="connect">Let's connect!</span>
          </p>
        </div>

        <h2 className="section-title">My Skillset</h2>

        <div className="skills-container">
          <div className="skills-category">
            <h3 className="category-title">Frontend Development</h3>
            <div className="skills-grid">
              {skills.frontend.map((skill, index) => (
                <div className="skill-card" key={index}>
                  <div className="skill-icon-container">{skill.icon}</div>
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <div className="skill-bar-container">
                      <div className="skill-bar" style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-category">
            <h3 className="category-title">Programming Languages</h3>
            <div className="skills-grid">
              {skills.languages.map((skill, index) => (
                <div className="skill-card" key={index}>
                  <div className="skill-icon-container">{skill.icon}</div>
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <div className="skill-bar-container">
                      <div className="skill-bar" style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-category">
            <h3 className="category-title">Databases & Backend</h3>
            <div className="skills-grid">
              {skills.backend.map((skill, index) => (
                <div className="skill-card" key={index}>
                  <div className="skill-icon-container">{skill.icon}</div>
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <div className="skill-bar-container">
                      <div className="skill-bar" style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe

