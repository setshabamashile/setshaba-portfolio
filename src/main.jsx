
import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  Code2,
  Database,
  Cloud,
  Server,
  ExternalLink,
  Lock
} from "lucide-react";
import "./styles.css";

const GITHUB = "https://github.com/setshabamashile";
const LINKEDIN =
  "https://www.linkedin.com/in/setshaba-mashile-b76542340/";
const EMAIL = "mailto:setshabaseemashile@gmail.com";

const projects = [
  {
    title: "SecureRide",
    category: "Full-Stack Application",
    description:
      "A ride-focused software project built around a modern frontend and backend architecture, demonstrating full-stack development and API integration.",
    stack: ["React", "Spring Boot", "Java", "SQL"],
    github: "https://github.com/setshabamashile/SecureRide",
    featured: true
  },
  {
    title: "Invoice Management System",
    category: "Business Software",
    description:
      "A database-driven business system for managing invoices and related operational data, supporting business processes and daily operations.",
    stack: ["PHP", "SQL", "MySQL", "Web"],
    github:
      "https://github.com/Mafundzha/AfricannadInvoiceSystemfinal",
    featured: true
  },
  {
    title: "ABSA InnovHackathon Concept",
    category: "FinTech / Innovation",
    description:
      "A technology-driven financial services concept developed for the EDHE ABSA InnovHackathon, focused on solving business and financial challenges through technology.",
    stack: [
      "Product Design",
      "FinTech",
      "Research",
      "Technology"
    ],
    github: GITHUB,
    featured: false
  }
];

const additionalProjects = [
  {
    title: "TutorsApp",
    category: "Education / Team Project",
    description:
      "A collaborative education-focused application developed as part of a team project. Repository access may be required.",
    repo: "https://github.com/Mafundzha/TutorsApp"
  },
  {
    title: "BMS WhatsApp API",
    category: "API / Automation",
    description:
      "A WhatsApp API project focused on connecting business workflows with WhatsApp-based communication and automation.",
    repo:
      "https://github.com/setshabamashile/BMS-WhatsApp-api"
  },
  {
    title: "Smart Scholar System",
    category: "Education Technology / Team Project",
    description:
      "A collaborative education technology project designed around digital tools for learners and academic workflows.",
    repo:
      "https://github.com/TebogoMphahleleDev/Smart-Scholar-System"
  }
];

const skills = [
  ["Java", "Working", Code2],
  ["C#", "Working", Code2],
  [".NET / ASP.NET Core", "Working", Server],
  ["JavaScript", "Working", Code2],
  ["React", "Working", Code2],
  ["Spring Boot", "Working", Server],
  ["HTML & CSS", "Strong", Code2],
  ["SQL / MySQL", "Strong", Database],
  ["REST APIs", "Working", Server],
  ["Authentication & Authorization", "Working", Lock],
  ["Git & GitHub", "Working", Code2],
  ["AWS Fundamentals", "Learning", Cloud]
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <div>
      <header className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
        <a className="brand" href="#home" onClick={close}>
          SM<span>.</span>
        </a>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {[
            "about",
            "skills",
            "projects",
            "experience",
            "contact"
          ].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={close}
            >
              {item[0].toUpperCase() + item.slice(1)}
            </a>
          ))}

          <a
            className="nav-cta"
            href={GITHUB}
            target="_blank"
            rel="noreferrer"
          >
            GitHub <ArrowUpRight size={15} />
          </a>
        </nav>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main>
        {/* HERO */}
        <section id="home" className="hero section">
          <div className="hero-grid"></div>

          <div className="hero-copy reveal">
            <div className="eyebrow">
              <span className="status-dot"></span>
              Available for opportunities
            </div>

            <h1>
              Building software
              <br />
              <em>that matters.</em>
            </h1>

            <p className="hero-text">
              I'm <strong>Setshaba Mashile</strong>, a Full-Stack
              Developer building practical, reliable and user-friendly
              applications using modern frontend and backend technologies.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                Explore my work <ArrowUpRight size={17} />
              </a>

              <a href="#contact" className="btn btn-ghost">
                Let's connect
              </a>
            </div>

            <div className="socials">
              <a
                href={GITHUB}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>

              <a
                href={LINKEDIN}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>

              <a href={EMAIL} aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="hero-card-wrap reveal">
            <div className="portrait-card">
              <img src="/Mashile.jpeg" alt="Setshaba Mashile" />

              <div className="portrait-caption">
                <span>Setshaba Mashile</span>
                <small>Full-Stack Developer</small>
              </div>
            </div>

            <div className="code-card">
              <div className="code-top">
                <span></span>
                <span></span>
                <span></span>
                <label>developer.cs</label>
              </div>

              <pre>
                <code>
                  <span className="kw">public class</span>{" "}
                  <span className="type">Developer</span> {"{"}
                  {"\n"}  <span className="kw">string</span> name ={" "}
                  <span className="str">"Setshaba"</span>;
                  {"\n"}  <span className="kw">string</span> focus ={" "}
                  <span className="str">"Full-Stack"</span>;
                  {"\n"}  <span className="kw">bool</span> learning ={" "}
                  <span className="bool">true</span>;
                  {"\n\n"}  <span className="kw">void</span>{" "}
                  <span className="fn">Build</span>() {"{"}
                  {"\n"}    SolveProblems();
                  {"\n"}    BuildAPIs();
                  {"\n"}    KeepLearning();
                  {"\n"}  {"}"}
                  {"\n"}{"}"}
                </code>
              </pre>
            </div>

            <div className="floating-chip chip-one">
              <Code2 size={16} /> C# / .NET
            </div>

            <div className="floating-chip chip-two">
              <Cloud size={16} /> AWS
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section about">
          <div className="section-label">01 — About</div>

          <div className="about-grid">
            <div>
              <h2>
                Curious by nature.
                <br />
                <span>Builder by choice.</span>
              </h2>
            </div>

            <div className="about-copy">
              <p>
                I'm a Full-Stack Developer who has completed a
                Computer Science qualification at{" "}
                <strong>Tshwane University of Technology</strong>.
                I have practical experience working with business
                systems, databases, application functionality and
                business processes.
              </p>

              <p>
                My technical skills include Java, C#, .NET,
                React, JavaScript, Spring Boot, SQL and MySQL.
                I also work with REST APIs, authentication,
                authorization and Git. I enjoy solving problems
                and building reliable software that meets real
                business needs.
              </p>

              <div className="facts">
                <div>
                  <span>Qualification</span>
                  <strong>Computer Science</strong>
                </div>

                <div>
                  <span>Institution</span>
                  <strong>TUT</strong>
                </div>

                <div>
                  <span>Role</span>
                  <strong>Full-Stack Developer</strong>
                </div>

                <div>
                  <span>Location</span>
                  <strong>South Africa</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section dark-section">
          <div className="section-label">02 — Skills</div>

          <div className="section-heading">
            <h2>
              Tools I use to
              <br />
              <span>turn ideas into software.</span>
            </h2>

            <p>
              My toolkit continues to grow through practical
              projects, hands-on development and continuous learning.
            </p>
          </div>

          <div className="skill-grid">
            {skills.map(([name, level, Icon]) => (
              <div className="skill-card" key={name}>
                <div className="skill-icon">
                  <Icon size={21} />
                </div>

                <div>
                  <h3>{name}</h3>
                  <p>{level}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section">
          <div className="section-label">03 — Selected Work</div>

          <div className="section-heading project-heading">
            <h2>
              Projects that show
              <br />
              <span>how I think.</span>
            </h2>

            <a
              href={GITHUB}
              target="_blank"
              rel="noreferrer"
              className="text-link"
            >
              View GitHub <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="project-grid">
            {projects.map((project, index) => (
              <article
                className={`project-card ${
                  project.featured ? "featured" : ""
                }`}
                key={project.title}
              >
                <div className="project-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="project-category">
                  {project.category}
                </div>

                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="tags">
                  {project.stack.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  Source / Details <ExternalLink size={15} />
                </a>
              </article>
            ))}
          </div>

          <div className="additional-heading">
            <div>
              <span className="mini-label">Additional Work</span>
              <h3>Collaborative & private projects</h3>
            </div>

            <p>
              Additional projects involving education technology,
              business automation and collaborative development.
            </p>
          </div>

          <div className="project-grid additional-grid">
            {additionalProjects.map((project, index) => (
              <article
                className="project-card private-card"
                key={project.title}
              >
                <div className="project-number">
                  {String(index + 4).padStart(2, "0")}
                </div>

                <div className="project-category">
                  {project.category}
                </div>

                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="private-status">
                  <Lock size={14} />
                  Repository access may be required
                </div>

                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  Repository <ExternalLink size={15} />
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* EXPERIENCE & EDUCATION */}
        <section
          id="experience"
          className="section experience-section"
        >
          <div className="section-label">
            04 — Experience & Education
          </div>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-date">Current</div>

              <div className="timeline-content">
                <h3>Full-Stack Developer</h3>
                <p className="company">Mafundzha</p>

                <p>
                  Work on business systems and application
                  functionality, support frontend and backend
                  development, work with databases, integrate APIs,
                  troubleshoot technical issues and help improve
                  business processes according to requirements.
                </p>

                <div className="tags">
                  <span>Java</span>
                  <span>React</span>
                  <span>C#</span>
                  <span>.NET</span>
                  <span>SQL</span>
                  <span>REST APIs</span>
                  <span>Authentication</span>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-date">Previous</div>

              <div className="timeline-content">
                <h3>Content Designer</h3>
                <p className="company">DEKRA IOL</p>

                <p>
                  Contributed to digital initiatives and content
                  design, helping improve functionality, user
                  engagement and the presentation of digital
                  information.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-date">Completed</div>

              <div className="timeline-content">
                <h3>Computer Science Qualification</h3>
                <p className="company">
                  Tshwane University of Technology
                </p>

                <p>
                  Completed studies covering software development,
                  databases, systems analysis and computer science
                  fundamentals.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-date">Certification</div>

              <div className="timeline-content">
                <h3>Full Stack Development</h3>
                <p className="company">FNB</p>

                <p>
                  Practical exposure to full-stack development
                  and modern software development workflows.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section contact-section">
          <div className="contact-inner">
            <div className="section-label">05 — Contact</div>

            <div className="contact-content">
              <div>
                <h2>
                  Let's build something
                  <br />
                  <em>useful.</em>
                </h2>

                <p>
                  I'm open to full-stack development roles,
                  junior developer opportunities, graduate
                  programmes and meaningful technology projects.
                </p>
              </div>

              <div className="contact-actions">
                <a className="contact-btn" href={EMAIL}>
                  <Mail size={19} />
                  Email me
                  <ArrowUpRight size={16} />
                </a>

                <a
                  className="contact-btn"
                  href={GITHUB}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github size={19} />
                  GitHub
                  <ArrowUpRight size={16} />
                </a>

                <a
                  className="contact-btn"
                  href={LINKEDIN}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin size={19} />
                  LinkedIn
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} Setshaba Mashile</span>
        <span>Designed & built with React</span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
