import React, { useState, useEffect, useRef } from "react";
import projects from "./ProjectData";
import "../styles/Projects.css";

function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);
    const projectRefs = useRef([]);

    useEffect(() => {
        const observerOptions = {
            root: null,
            threshold: 0.1,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                } else {
                    entry.target.classList.remove("visible");
                }
            });
        }, observerOptions);

        projectRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            projectRefs.current.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, []);

    const openModal = (project) => {
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    return (
        <section className="projects-container" id="projects">
            <h2 className="section-title">My Projects</h2>
            <div className="container projects-grid">
                {projects.map((project, index) => (
                    <div
                        key={project.projId}
                        className="project-box hidden"
                        ref={(el) => (projectRefs.current[index] = el)}
                    >
                        <img
                            src={project.thumbImg}
                            alt={project.title}
                            className="project-thumb"
                        />
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-description">{project.projThumb}</p>
                        <ul className="tech-used">
                            {project.techUsed.map((tech, index) => (
                                <li key={index} className="tech-item">
                                    {tech}
                                </li>
                            ))}
                        </ul>
                        <button
                            className="view-details-btn"
                            onClick={() => openModal(project)}
                        >
                            View Details
                        </button>
                        <button
                            className="view-details-btn"
                            onClick={() => window.open(project.github, '_blank')}
                        >
                            View GitHub Repo
                        </button>
                    </div>
                ))}
            </div>

            {selectedProject && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div
                        className="modal-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h3 className="modal-title">{selectedProject.title}</h3>
                        <p className="modal-description">{selectedProject.projDetails}</p>
                        <iframe
                            src={`https://drive.google.com/file/d/${selectedProject.vidUrl}/preview`}
                            className="project-video"
                            allow="autoplay"
                            
                        ></iframe>

                        <button className="close-btn" onClick={closeModal}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Projects;
