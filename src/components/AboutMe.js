import React, { useState, useEffect, useRef } from "react";
import "../styles/AboutMe.css";

function AboutMe() {
    const [isVisible, setIsVisible] = useState(false);
    const aboutMeRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.2 } // Trigger when 20% of the section is visible
        );

        if (aboutMeRef.current) {
            observer.observe(aboutMeRef.current);
        }

        return () => {
            if (aboutMeRef.current) {
                observer.unobserve(aboutMeRef.current);
            }
        };
    }, []);

    return (
        <section
            id="about"
            ref={aboutMeRef}
            className="aboutme-container"
        >
            <h2 className={`aboutme-heading ${isVisible ? "visible" : ""}`}>
                About Me
            </h2>
            <p className={`aboutme-text ${isVisible ? "visible" : ""}`}>
                Hello! I'm Bilal Shakeel, a passionate Full Stack Web Developer and a student at FAST University. I specialize in crafting dynamic, responsive, and user-friendly web applications using modern technologies like React, Node.js, MongoDB, and .NET. My journey in web development began with creating projects using HTML, CSS, and JavaScript, and has evolved to building robust applications using the MERN stack and .NET frameworks.

                I am driven by curiosity and a relentless desire to learn and grow. Beyond web development, I am deeply interested in exploring Artificial Intelligence and its potential to revolutionize technology. I thrive on solving complex problems and collaborating with teams to bring impactful ideas to life.
            </p>
        </section>
    );
}

export default AboutMe;
