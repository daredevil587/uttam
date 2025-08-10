import React, { useEffect, useState } from "react";
import "./index.css";
import profilePic from "./myprofile.jpg";

// Typing effect for your name
function TypingName({ text, speed = 120 }) {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);
  return (
    <span className="typing-name">
      {displayed}
      <span className="typing-cursor" />
    </span>
  );
}

export default function Portfolio() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [formStatus, setFormStatus] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // AJAX Formspree submission
  async function handleFormSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/mvgqdwwv", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setFormStatus("Thank you! I will contact soon.");
      form.reset();
    } else {
      setFormStatus("Sorry, something went wrong. Please try again.");
    }
  }

  return (
    <div className="astra-portfolio">
      {/* Navigation */}
      <nav className={`astra-navbar${showNavbar ? "" : " navbar--hidden"}`}>
        <div className="astra-container">
          <h1 className="astra-logo">
            <TypingName text="Uttam Yadav" />
          </h1>
          <ul className="astra-nav-links">
            {["About", "Skills", "Certifications", "Projects", "Contact"].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`}>{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero */}
      <header className="astra-hero">
        <div className="astra-container astra-hero-content">
          <div className="astra-hero-text">
            <h2>Bachelor Of Cybersecurity & Network Engineer</h2>
            <p>Specializing in Cloud Security • Programming • Secure Systems</p>
            <div className="astra-hero-buttons">
              <a href="mailto:uy913323@gmail.com" className="astra-btn astra-primary-btn">
                Contact Me
              </a>
              <a href="#projects" className="astra-btn astra-secondary-btn">
                View Projects
              </a>
              <a
                href="/Resume.pdf"
                className="astra-btn astra-secondary-btn"
                download="Uttam_Yadav_Resume.pdf"
              >
                Download Resume
              </a>
            </div>
          </div>
          <div className="astra-hero-image">
            <img src={profilePic} alt="Uttam Yadav Profile" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="astra-container astra-main-content">
        {/* About */}
        <section id="about" className="astra-section">
          <h3>About Me</h3>
          <p>
            I'm Uttam, pursuing a Bachelor's degree in Cybersecurity and Network at the University of East London.
            I’m passionate about securing systems, developing cloud solutions, and writing clean, maintainable code.
            My work blends technical expertise in Java, Python, and Web Development with practical teamwork and leadership experience from hospitality.
          </p>
        </section>

        {/* Skills */}
        <section id="skills" className="astra-section">
          <h3>Skills</h3>
          <div className="astra-skills-grid">
            <div className="astra-skill-card">
              <h4>Programming</h4>
              <p>Java, Python, HTML, CSS, JS</p>
            </div>
            <div className="astra-skill-card">
              <h4>Cybersecurity</h4>
              <p>Fundamentals, Secure Coding</p>
            </div>
            <div className="astra-skill-card">
              <h4>Cloud</h4>
              <p>AWS Basics, Cloud Security Concepts</p>
            </div>
            <div className="astra-skill-card">
              <h4>Soft Skills</h4>
              <p>Teamwork, Time Management, Adaptability</p>
            </div>
            <div className="astra-skill-card">
              <h4>Languages</h4>
              <p>English, Bhojpuri, Nepali</p>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section id="certifications" className="astra-section">
          <h3>Licenses & Certifications</h3>
          <div className="astra-certifications-list">
            <div className="astra-cert-card">
              <img src="https://assets.forage.com/logo/deloitte.png" alt="Forage Deloitte" className="astra-cert-logo" />
              <div>
                <strong>Deloitte Australia - Cyber Job Simulation</strong><br />
                <span>Forage &mdash; Issued Jul 2025</span><br />
                <span>Credential ID: 79PnYeBkRSCTRyFQb</span><br />
                
              </div>
            </div>
            <div className="astra-cert-card">
              <img src="https://assets.forage.com/logo/deloitte.png" alt="Forage Deloitte" className="astra-cert-logo" />
              <div>
                <strong>Deloitte Australia - Data Analytics Job Simulation</strong><br />
                <span>Forage &mdash; Issued Jul 2025</span><br />
                <span>Credential ID: NxzvFMMwpTppwe87k</span><br />
                
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="astra-section">
          <h3>Projects</h3>
          <div className="astra-projects-grid">
            <div className="astra-project-card">
              <div className="astra-project-header">
                <h4>Secure Chat Application</h4>
                <span className="astra-status planned">Planned</span>
              </div>
              <p>
                A secure messaging app with encryption and authentication.<br />
           
              </p>
            </div>
            <div className="astra-project-card">
              <div className="astra-project-header">
                <h4>EV vs Gasoline Calculator</h4>
                <span className="astra-status learning">Learning</span>
              </div>
              <p>
                Compare lifetime costs of electric vs gasoline vehicles.<br />
                
              </p>
            </div>
            <div className="astra-project-card">
              <div className="astra-project-header">
                <h4>Tic Tac Toe</h4>
                <span className="astra-status school-project">School Project</span>
              </div>
              <p>
                Classic game with simple AI.<br />
                
              </p>
            </div>
            <div className="astra-project-card">
              <div className="astra-project-header">
                <h4>Asphirium Browser</h4>
                <span className="astra-status planning">Planning</span>
              </div>
              <p>
                A concept for a custom secure web browser.<br />
               
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="astra-section astra-contact-section">
          <h3>Contact</h3>
          <p>Email: <a href="mailto:uy913323@gmail.com">uy913323@gmail.com</a></p>
          <p>Phone: <a href="tel:+447771844582">+44 7771 844582</a></p>
          <div className="astra-social-links">
            <a href="https://linkedin.com/in/uttam-yadav-a38200237" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              <i className="fab fa-github"></i> GitHub
            </a>
          </div>
          <form
            className="astra-contact-form"
            onSubmit={handleFormSubmit}
          >
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" required />
            <button type="submit" className="astra-btn astra-primary-btn">Send</button>
          </form>
          {formStatus && (
            <div className="form-status-message">{formStatus}</div>
          )}
        </section>
      </main>

      <footer className="astra-footer">
        © {new Date().getFullYear()} Uttam Yadav. All rights reserved.
      </footer>
    </div>
  );
}