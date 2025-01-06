import React from "react";
import "../styles/Navbar.css";
import logo from "../images/bs logo.png";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container-fluid">
                {/* Logo and Brand Title */}
                <div className="d-flex align-items-center">
                    <img src={logo} alt="Logo" className="navbar-logo me-2" />
                    <a className="navbar-brand Title" href="#">
                        Bilal Shakeel
                    </a>
                </div>

                {/* Toggler Button */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navbar Links */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a
                                className="nav-link sizefont"
                                href="#home"
                                onClick={() =>
                                    document
                                        .getElementById("home")
                                        .scrollIntoView({ behavior: "smooth", block: "start" })
                                }
                            >
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link sizefont" href="#about">
                                About Me
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link sizefont"
                                href="#skills"
                                onClick={() =>
                                    document
                                        .getElementById("skills")
                                        .scrollIntoView({ behavior: "smooth", block: "start" })
                                }
                            >
                                Skills
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link sizefont"
                                href="#projects"
                                onClick={() =>
                                    document
                                        .getElementById("projects")
                                        .scrollIntoView({ behavior: "smooth", block: "start" })
                                }
                            >
                                Projects
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link sizefont"
                                href="#contact"
                                onClick={() =>
                                    document
                                        .getElementById("contact")
                                        .scrollIntoView({ behavior: "smooth", block: "start" })
                                }
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
