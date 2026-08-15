import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight, Github, Linkedin, Mail, Download, Menu, X,
  Code2, Database, Cloud, Server, ExternalLink, MapPin, Sparkles
} from "lucide-react";
import "./styles.css";

const GITHUB = "https://github.com/setshabamashile";
const LINKEDIN = "https://www.linkedin.com/";
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
      "A practical business system for managing invoices and related operational data, with a database-driven architecture.",
    stack: ["Java", "SQL", "MySQL", "Web"],
    github: GITHUB,
    featured: true
  },
  {
    title: "ABSA InnovHackathon Concept",
    category: "FinTech / Innovation",
    description:
      "A technology-driven financial services concept developed for the EDHE ABSA InnovHackathon, focused on solving business and financial challenges through technology.",
    stack: ["Product Design", "FinTech", "Research", "Technology"],
    github: GITHUB,
    featured: false
  }
];

const skills = [
  ["Java", "Strong", Code2],
  ["JavaScript", "Working", Code2],
  ["React", "Working", Code2],
  ["Spring Boot", "Working", Server],
  ["HTML & CSS", "Strong", Code2],
  ["MySQL / SQL", "Strong", Database],
  ["Git & GitHub", "Working", Code2],
  ["AWS Fundamentals", "Learning", Cloud]
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <div>
      <header className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
        <a className="brand" href="#home" onClick={close}>SM<span>.</span></a>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {["about", "skills", "projects", "experience", "contact"].map((item) => (
            <a key={item} href={`#${item}`} onClick={close}>
              {item[0].toUpperCase() + item.slice(1)}
            </a>
          ))}
          <a className="nav-cta" href={GITHUB} target="_blank" rel="noreferrer">
            GitHub <ArrowUpRight size={15} />
          </a>
        </nav>

        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-grid"></div>
          <div className="hero-copy reveal">
            <div className="eyebrow"><span className="status-dot"></span> Available for opportunities</div>
            <h1>Building software<br /><em>that matters.</em></h1>
            <p className="hero-text">
              I'm <strong>Setshaba Mashile</strong>, a Computer Science developer focused on
              building practical, reliable and user-friendly software solutions.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">Explore my work <ArrowUpRight size={17} /></a>
              <a href="#contact" className="btn btn-ghost">Let's connect</a>
            </div>
            <div className="socials">
              <a href={GITHUB} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={20}/></a>
              <a href={LINKEDIN} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={20}/></a>
              <a href={EMAIL} aria-label="Email"><Mail size={20}/></a>
            </div>
          </div>

          <div className="hero-card-wrap reveal">
            <div className="code-card">
              <div className="code-top"><span></span><span></span><span></span><label>developer.java</label></div>
              <pre><code><span className="kw">public class</span> <span className="type">Developer</span> {"{"}
{"\n"}  <span className="kw">String</span> name = <span className="str">"Setshaba"</span>;
{"\n"}  <span className="kw">String</span> focus = <span className="str">"Software"</span>;
{"\n"}  <span className="kw">boolean</span> learning = <span className="bool">true</span>;
{"\n"}
{"\n"}  <span className="kw">void</span> <span className="fn">build</span>() {"{"}
{"\n"}    solveProblems();
{"\n"}    shipProducts();
{"\n"}    keepLearning();
{"\n"}  {"}"}
{"\n"}{"}"}</code></pre>
            </div>
            <div className="floating-chip chip-one"><Code2 size={16}/> Java</div>
            <div className="floating-chip chip-two"><Cloud size={16}/> AWS</div>
          </div>
        </section>

        <section id="about" className="section about">
          <div className="section-label">01 — About</div>
          <div className="about-grid">
            <div>
              <h2>Curious by nature.<br/><span>Builder by choice.</span></h2>
            </div>
            <div className="about-copy">
              <p>
                I'm a final-year Computer Science student at <strong>Tshwane University of Technology</strong>,
                developing my skills across software development, databases and cloud fundamentals.
              </p>
              <p>
                I enjoy taking a problem, understanding how it works, and turning it into a working
                software solution. My current focus includes Java, React, Spring Boot, JavaScript,
                SQL and AWS fundamentals.
              </p>
              <div className="facts">
                <div><span>Education</span><strong>Computer Science</strong></div>
                <div><span>Institution</span><strong>TUT</strong></div>
                <div><span>Focus</span><strong>Software Development</strong></div>
                <div><span>Location</span><strong>South Africa</strong></div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section dark-section">
          <div className="section-label">02 — Skills</div>
          <div className="section-heading">
            <h2>Tools I use to<br/><span>turn ideas into software.</span></h2>
            <p>My toolkit is growing continuously through academic work, projects and hands-on development.</p>
          </div>
          <div className="skill-grid">
            {skills.map(([name, level, Icon]) => (
              <div className="skill-card" key={name}>
                <div className="skill-icon"><Icon size={21}/></div>
                <div><h3>{name}</h3><p>{level}</p></div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-label">03 — Selected Work</div>
          <div className="section-heading project-heading">
            <h2>Projects that show<br/><span>how I think.</span></h2>
            <a href={GITHUB} target="_blank" rel="noreferrer" className="text-link">View GitHub <ArrowUpRight size={16}/></a>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <article className={`project-card ${project.featured ? "featured" : ""}`} key={project.title}>
                <div className="project-number">0{index + 1}</div>
                <div className="project-category">{project.category}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tags">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div>
                <a href={project.github} target="_blank" rel="noreferrer" className="project-link">
                  Source / Details <ExternalLink size={15}/>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section experience-section">
          <div className="section-label">04 — Experience & Education</div>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-date">Current</div>
              <div className="timeline-content">
                <h3>Computer Science Analyst</h3>
                <p className="company">Reflex Construction Pty Ltd</p>
                <p>Applying analytical and technology skills to support business and operational needs.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">2026 — 2027</div>
              <div className="timeline-content">
                <h3>Diploma in Computer Science</h3>
                <p className="company">Tshwane University of Technology</p>
                <p>Final-year studies covering software development, databases, systems analysis and computer science fundamentals.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">Certification</div>
              <div className="timeline-content">
                <h3>Full Stack Development</h3>
                <p className="company">FNB</p>
                <p>Practical exposure to full-stack development and modern software engineering workflows.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="contact-inner">
            <div className="section-label">05 — Contact</div>
            <div className="contact-content">
              <div>
                <h2>Let's build something<br/><em>useful.</em></h2>
                <p>I'm open to internships, graduate opportunities, software development roles and meaningful technology projects.</p>
              </div>
              <div className="contact-actions">
                <a className="contact-btn" href={EMAIL}><Mail size={19}/> Email me <ArrowUpRight size={16}/></a>
                <a className="contact-btn" href={GITHUB} target="_blank" rel="noreferrer"><Github size={19}/> GitHub <ArrowUpRight size={16}/></a>
                <a className="contact-btn" href={LINKEDIN} target="_blank" rel="noreferrer"><Linkedin size={19}/> LinkedIn <ArrowUpRight size={16}/></a>
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