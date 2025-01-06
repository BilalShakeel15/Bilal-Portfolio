import React, { useState, useEffect } from "react";
import "../styles/Hero.css";
import mypic from "../images/My pic.jpg";
import Resume from "../Resume/Bilal Shakeel Resume.pdf";

function Hero() {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    const texts = [
        "Full Stack Web Developer",
        ".NET Developer",
        "MERN Stack Developer",
    ];

    useEffect(() => {
        const firstTimeout = setTimeout(() => {
            setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);

            const interval = setInterval(() => {
                setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
            }, 4000);

            return () => clearInterval(interval);
        }, 6000);

        return () => clearTimeout(firstTimeout);
    }, [texts.length]);

    return (
        <section id="home" className="hero-container">
            <div className="hero-text">
                <h1 className="hero-heading">
                    <span className="line line-1">
                        Hello, I'm <span className="highlight">Bilal Shakeel</span>
                    </span>
                    <br />
                    <span className="line-2 changing-text">{texts[currentTextIndex]}</span>
                </h1>
                <p className="hero-description">
                    I am a student at FAST University with a passion for building interactive web applications using modern technologies like React, Node.js, MongoDB, and .NET. I am a quick learner, eager to contribute my skills and fresh ideas to impactful projects. With a strong foundation in computer science and a collaborative mindset, I thrive in team environments. Let’s create something amazing together!
                </p>
                {/* Social Media Icons */}
                <div className="hero-icons">
                    <a href="https://www.linkedin.com/in/bilalshakeel15/" target="_blank" rel="noopener noreferrer" className="icon">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/BilalShakeel15" target="_blank" rel="noopener noreferrer" className="icon">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="mailto:bilalshakeel.ahmed15@gmail.com" className="icon">
                        <i className="fas fa-envelope"></i>
                    </a>
                </div>
                {/* Buttons */}
                <a href={Resume} download="Bilal_Shakeel_Resume.pdf">
                    <button className="download-btn">Download Resume</button>
                </a>
                
            </div>
            <div className="hero-image">
                <img src={mypic} alt="Bilal Shakeel" />
            </div>
        </section>
    );
}

export default Hero;
