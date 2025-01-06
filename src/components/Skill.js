// src/components/Skills.js
import React, { useEffect } from "react";
import skills from "./Skills";
import "../styles/Skill.css"; // Import CSS for styling

function Skills() {
  useEffect(() => {
    const skillCards = document.querySelectorAll(".skill-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.1 } // Trigger when 20% of the card is visible
    );

    skillCards.forEach((card) => observer.observe(card));

    return () => observer.disconnect(); // Cleanup observer on component unmount
  }, []);

  return (
    <div className="skills-section" id="skills">
      <h2 className="skill-heading">Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <img src={skill.image} alt={skill.name} className="skill-image" />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
